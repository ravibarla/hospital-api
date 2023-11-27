import { Patient } from "../model/patient.js";

export const register = (req, res) => {
  const { name, phone, age,status } = req.body;
  const newPatient = new Patient({
    name,
    phone,
    age,
    status
  });
  newPatient
    .save()
    .then(() => console.log("patient is registered succeffully"));
  return res.send(" registeration of doctor succesfully");
};

export const getPatients = (req, res) => {
  Patient.find({}).then((patient) => res.status(200).send(patient));
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

export const createReport=(req,res)=>{
    
}