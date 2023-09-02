import axios from "axios";

const getAllTimeZones = async (req, res) => {
  try {
    // Make a GET request to the public API to get a list of timezones
    const response = await axios.get("https://worldtimeapi.org/api/timezone");
    const timezones = await Promise.all(
      response.data.map(async (timezone) => {
        try {
          // Make a GET request to get details of each timezone
          const timezoneResponse = await axios.get(
            `https://worldtimeapi.org/api/timezone/${timezone}`
          );
          const name = timezoneResponse.data.timezone;
          const localTime = timezoneResponse.data.datetime;

          return { name, localTime };
        } catch (e) {
          console.error(e);
          return null;
        }
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
  const subpath = req.params[0];
  try {
    if (subpath) {
      const apiResponse = await axios.get(
        `https://worldtimeapi.org/api/timezone/${subpath}`
      );
      if (apiResponse?.data) {
        res.send(apiResponse.data);
      } else res.sendStatus(404);
    } else res.sendStatus(400);
  } catch (e) {
    res.send(e);
  }
  return;
};

export { getAllTimeZones, getTimeZoneById };
