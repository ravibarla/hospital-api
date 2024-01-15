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
/**
 * @openapi
 * components:
 *  schemas:
 *    Doctor:
 *      type: object
 *      required: 
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *          description: username
 *        password:
 *          type: string
 *          description: password
 *      example:
 *          username: ravidoctor1
 *          password: 123            
 *      
 */

/**
 * @openapi
 * /doctor:
 *    post:
 *      summary: doctor login api
 *      response:
 *        200:
 *          description: doctpr login api
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties: 
 *                
 */
doctorRouter.post("/login", login);
