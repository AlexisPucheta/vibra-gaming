import express from "express";
import { getAllTimeZones, getTimeZoneById } from "../controllers/timeZone.js";

const router = express.Router();

router.get("/", getAllTimeZones);
router.get("/*", getTimeZoneById);

// router.get("/*", getTimeZoneById);
// router.put("/:id", function () {
//   console.log("ASD put/:id");
// });
// router.delete("/:id", function () {
//   console.log("ASD get/:id");
// });

export default router;
