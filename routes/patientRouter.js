import express from "express";
import {
  getPatients,
  register,
  remove,
} from "../controller/patientsController.js";
import { verifyToken } from "../controller/doctorsController.js";

export const patientRouter = express();
patientRouter.post(
  "/register",
  (req, res, next) => verifyToken(req, res, next),
  register
);
patientRouter.get(
  "/",
  (req, res, next) => verifyToken(req, res, next),
  getPatients
);
// patientRouter.post("/:id", createReport);
patientRouter.post(
  "/remove/:id",
  (req, res, next) => verifyToken(req, res, next),
  remove
);

// patientRouter.get("/:id/all_reports", getPatientReport);
// patientRouter.get("/status", getPatient);
