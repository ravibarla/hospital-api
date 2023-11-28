import exp from "constants";
import { Doctor } from "../model/doctor.js";
import jwt from "jsonwebtoken";
import { json } from "express";
export const home = (req, res) => {
  return res.send("home");
};

export const registerDoctor = (req, res) => {
  const { name, licence_id, phone, experience, email, username, password } =
    req.body;
  const newDoctor = new Doctor({
    // name,
    // licence_id,
    // phone,
    // experience,
    // email,
    // createdAt: new Date().toLocaleString("en-US"),
    username,
    password,
  });
  newDoctor.save().then(() => console.log("doctor is registered succeffully"));
  return res.send(" registeration of doctor succesfully");
};

export const getDoctors = (req, res) => {
  const doctors = Doctor.find({}).then((doctors) =>
    res.status(200).send(doctors)
  );
};

export const getDoctorById = (id) => {
  console.log("id :", id);
};

export const removeDoctor = (req, res) => {
  // console.log("id :", id);
  const { id } = req.params;
  Doctor.findOneAndDelete({ _id: id }).then(() =>
    res.status(200).send("deleted successfully")
  );
};

export const login = (req, res) => {
  // console.log("login")
  const secretKey = "hello";
  const { username, password } = req.body;
  // console.log("username :", username, " password :", password);
  Doctor.findOne({ username }).then((doctor) => {
    const doctorUser = doctor;
    if (!doctorUser || doctorUser.password !== password) {
      return res.status(200).send("incorrect user and password");
    }
    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
    res.send(token);
  });
};

export const verifyToken = (req, res, next) => {
  // console.log("header :",req.headers);
  const secretKey = "hello";
  const token = req.headers.authorization
  if (!token||!token.startsWith("Bearer")) {
    return res.status(403).json({ message: "Token is not provided" });
  }
  const formattedToken=token.split(" ")[1]
  jwt.verify(formattedToken, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.username = decoded.username;
    next();
  });
};
