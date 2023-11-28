import mongoose from "mongoose";
import { Doctor } from "./doctor.js";
// define patient schema
const patientSchema = mongoose.Schema([
  {
    name: String,
    phone: Number,
    age: Number,

    report: {
      created_by: {
        id: { type: mongoose.Schema.Types.ObjectId, ref: Doctor },
        doctorName: { type: String, ref: Doctor },
      },
      vaccine_received: {
        type: String,
        enum: ["YES", "NO"],
      },
      doses_completed: Number,
      last_dose_date: String,
      covid_status: {
        type: String,
        enum: ["POSITIVE", "NEGATIVE"],
      },
    },
  },
]);

export const Patient = mongoose.model("Patient", patientSchema);
