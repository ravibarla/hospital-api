import { Patient } from "../model/patient.js";
import { getDoctorById } from "./doctorsController.js";

export const register = (req, res) => {
  const { name, phone, age, status, created_by } = req.body;
  console.log("created by doctor:", getDoctorById(created_by));
  const newPatient = new Patient({
    name,
    phone,
    age,
    status,
    created_by,
  });
  newPatient
    .save()
    .then(() => console.log("patient is registered succeffully"));
  return res.send(" registeration of doctor succesfully");
};

export const getPatients = async (req, res) => {
  const patients = await Patient.find().populate("created_by", "username");
  const formattedOutput = patients.map((patient) => {
    return {
      _id: patient._id,
      name: patient.name,
      age: patient.age,
      created_by: {
        _id: patient.created_by._id,
        name: patient.created_by.username,
      },
    };
  });
  return res.json(formattedOutput);
};

export const remove = (req, res) => {
  // console.log("id :", id);
  const { id } = req.params;
  Patient.findOneAndDelete({ _id: id }).then(() =>
    res.status(200).send("deleted successfully")
  );
};

export const patientStatusReports = (req, res) => {
  const { status } = req.params;
  Patient.find({ status }).then((patient) => res.send(patient));
};

export const createReport = (req, res) => {};
