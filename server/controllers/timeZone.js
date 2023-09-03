import axios from "axios";

// Función para obtener detalles de una zona horaria con reintentos
const getDetailsWithRetry = async (timezone, maxRetries) => {
  let retries = 0;
  while (retries <= maxRetries) {
    try {
      // Intenta hacer la solicitud para obtener detalles de la zona horaria
      const timezoneResponse = await axios.get(
        `https://worldtimeapi.org/api/timezone/${timezone}`
      );
      const name = timezoneResponse.data.timezone;
      const localTime = timezoneResponse.data.datetime;
      return { name, localTime };
    } catch (error) {
      console.error(
        `Failed to fetch timezone details for ${timezone}. Retry ${
          retries + 1
        }/${maxRetries + 1}`
      );
      retries++;
      if (retries <= maxRetries) {
        // Espera un momento antes de intentar nuevamente
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        console.error(`Max retries (${maxRetries}) reached for ${timezone}`);
        return null; // Si se agotan los intentos, devuelve null
      }
    }
  }
};

const getAllTimeZones = async (req, res) => {
  try {
    // Make a GET request to the public API to get a list of timezones
    const response = await axios.get("https://worldtimeapi.org/api/timezone");
    const timezones = await Promise.all(
      response.data.map(async (timezone) => {
        const maxRetries = 2; // Número máximo de reintentos
        const timezoneData = await getDetailsWithRetry(timezone, maxRetries);
        return timezoneData;
      })
    );

    // Filtrar las zonas horarias que pudieron ser obtenidas con éxito
    const validTimezones = timezones.filter((timezone) => timezone !== null);

    res.json(validTimezones);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching timezones." });
  }
};

const getTimeZoneById = async (req, res) => {
  const name = req.params.name.replace(/\+/g, "/");
  try {
    if (name) {
      const apiResponse = await axios.get(
        `https://worldtimeapi.org/api/timezone/${name}`
      );
      if (apiResponse.data?.datetime && apiResponse.data?.timezone) {
        const timezoneData = {
          name: apiResponse.data.timezone,
          localTime: apiResponse.data.datetime,
        };
        res.json(timezoneData);
      } else {
        res.status(404).json({ error: "Timezone not found." });
      }
    } else {
      res
        .status(400)
        .json({ error: "Invalid request, timezone name is missing." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching timezone details." });
  }
};

const updateTimeZoneById = async (req, res) => {
  const name = req.params.name.replace(/\+/g, "/");
  try {
    if (name) {
      const apiResponse = await axios.get(
        `https://worldtimeapi.org/api/timezone/${name}`
      );
      if (apiResponse.data?.datetime && apiResponse.data?.timezone) {
        res.status(200).json(`${name} updated`);
      } else {
        res.status(404).json({ error: "Timezone not found." });
      }
    } else {
      res
        .status(400)
        .json({ error: "Invalid request, timezone name is missing." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching timezone details." });
  }
};

const deleteTimeZoneById = async (req, res) => {
  const name = req.params.name.replace(/\+/g, "/");
  try {
    if (name) {
      const apiResponse = await axios.get(
        `https://worldtimeapi.org/api/timezone/${name}`
      );
      if (apiResponse.data?.datetime && apiResponse.data?.timezone) {
        res.status(200).json(`${name} deleted`);
      } else {
        res.status(404).json({ error: "Timezone not found." });
      }
    } else {
      res
        .status(400)
        .json({ error: "Invalid request, timezone name is missing." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching timezone details." });
  }
};

export {
  getAllTimeZones,
  getTimeZoneById,
  updateTimeZoneById,
  deleteTimeZoneById,
};
