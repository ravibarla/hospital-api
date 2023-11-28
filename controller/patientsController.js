import { Doctor } from "../model/doctor.js";
import { Patient } from "../model/patient.js";
import { getDoctorById } from "./doctorsController.js";

export const register = (req, res) => {
  console.log("req :", req.body);
  const {
    name,
    phone,
    age,
    vaccination_received,
    doses_completed,
    covid_status,
    last_dose_date,
  } = req.body;
  Doctor.find({ username: req.username }).then((doctor) => {
    const newPatient = new Patient({
      name,
      phone,
      age,
    });
    newPatient
      .save()
      .then(() => console.log("patient is registered succeffully"));
    return res.send(" registeration of patient succesfully");
  });
};

export const getPatients = async (req, res) => {
  Patient.find({}).then((patient) => res.send(patient));
};

export const remove = (req, res) => {
  console.log("id :", req.params);
  const { id } = req.params;
  Patient.findOneAndDelete({ _id: id })
    .then(() => res.status(200).send("deleted successfully"))
    .catch((err) => console.log(err));
};

export const patientStatusReports = (req, res) => {
  const { status } = req.params;
  // console.log(status)
  Patient.find({ "report.vaccine_received": status }).then((patient) =>
    res.send(patient)
  );
};

export const createReport = (req, res) => {
  const patientId = req.params.id;
  console.log(patientId);
  const { vaccine_received, doses_completed, last_dose_date, covid_status } =
    req.body;
  Doctor.find({ username: req.username }).then((doctor) => {
    const report = {
      created_by: {
        id: doctor._id,
        doctorsName: doctor.username,
      },
      vaccine_received,
      doses_completed,
      last_dose_date,
      covid_status,
    };

    Patient.findByIdAndUpdate(
      { _id: patientId },
      {
        $set: {
          report: report,
        },
      }
    )
      .then((patient) => {
        patient.save();
        return res.status(200).send("reports successfully updated");
      })
      .catch((err) => console.log(err));
    // });
  });
};

export const getPatientReport = (req, res) => {
  console.log;
  const { id } = req.params;
  Patient.find({ _id: id }).then((patient) => res.send(patient));
};
