import express from "express";
import router from "./routes/index.js";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("Someone pinged here! " + new Date().toLocaleDateString());
  res.send("pong");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

app.use("/timezones", router);
