import mongoose from "mongoose";
// define doctor schema
const doctorSchema = mongoose.Schema([
  {
    username: String,
    password: String,
  },
]);

export const Doctor = mongoose.model("Doctor", doctorSchema);
