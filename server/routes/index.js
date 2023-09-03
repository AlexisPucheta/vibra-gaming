import express from "express";
import {
  getAllTimeZones,
  getTimeZoneById,
  updateTimeZoneById,
  deleteTimeZoneById,
} from "../controllers/timeZone.js";

const router = express.Router();

router.get("/", getAllTimeZones);
router.get("/:name", getTimeZoneById);
router.put("/:name", updateTimeZoneById);
router.delete("/:name", deleteTimeZoneById);

export default router;
