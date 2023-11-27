import express from "express";
import {
  getDoctors,
  registerDoctor,
  removeDoctor,
  login
} from "../controller/doctorsController.js";

export const doctorRouter = express.Router();
doctorRouter.get("/", getDoctors);
doctorRouter.post("/register", registerDoctor);
doctorRouter.post("/remove/:id", removeDoctor);
doctorRouter.post("/login", login);
