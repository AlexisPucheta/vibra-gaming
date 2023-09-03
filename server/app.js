import express from "express";
import router from "./routes/index.js";
import cors from "cors"

const app = express();
app.use(express.json());
// Then pass these options to cors:
app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

app.use('/timezones', (req, _res, next) => {
  console.log('Request Info:', req.method + ' to ' + req.url)
  next()
})

app.use("/timezones", router);
