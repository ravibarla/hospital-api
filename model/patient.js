import mongoose from "mongoose";
import { Doctor } from "./doctor.js";
// define patient schema
const patientSchema = mongoose.Schema([
  {
    name: String,
    phone: Number,
    age: Number,
    status: String,
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Doctor,
    },
  },
]);

export const Patient = mongoose.model("Patient", patientSchema);
