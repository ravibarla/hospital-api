import { Doctor } from "../model/doctor.js";

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
  const { username, password } = req.body;
  console.log("username :", username, " password :", password);
};
