import express from "express";
import { getPatients, register,remove } from "../controller/patientsController.js";

export const patientRouter = express();
patientRouter.post("/register", register);
patientRouter.get("/", getPatients);
// patientRouter.post("/:id", createReport);
patientRouter.post("/remove/:id", remove);

// patientRouter.get("/:id/all_reports", getPatientReport);
// patientRouter.get("/status", getPatient);
