import express from "express";
import { home } from "../controller/doctorsController.js";
import { doctorRouter } from "./doctorRouter.js";

import { patientRouter } from "./patientRouter.js";
import { patientStatusReports } from "../controller/patientsController.js";

export const router = express.Router();
router.get("/", home);
router.use("/doctors", doctorRouter);
router.use("/patients", patientRouter);
router.get("/reports/:status",patientStatusReports)
