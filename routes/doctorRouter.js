import express from "express";
import {
  getDoctors,
  registerDoctor,
  removeDoctor,
  login,
  verifyToken,
} from "../controller/doctorsController.js";

export const doctorRouter = express.Router();
doctorRouter.get(
  "/",
  (req, res, next) => verifyToken(req, res, next),
  getDoctors
);
doctorRouter.post("/register", registerDoctor);
doctorRouter.post("/remove/:id", removeDoctor);
doctorRouter.post("/login", login);
