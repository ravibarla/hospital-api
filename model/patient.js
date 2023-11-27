import mongoose from "mongoose";
// define patient schema
const patientSchema = mongoose.Schema([
  {
    name: String,
    phone: Number,
    age: Number,
    status: String,
  },
]);

export const Patient = mongoose.model("Patient", patientSchema);
