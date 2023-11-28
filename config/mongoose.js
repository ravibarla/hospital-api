import mongoose from "mongoose";

// mongoose.connect(`mongodb://127.0.0.1:27017/doctor-api`);
mongoose.connect(`mongodb+srv://ravibarla1:HyvvR8oZFMm88a0O@cluster0.mr8hpjk.mongodb.net/?retryWrites=true&w=majority`)

export const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting to mongodb"));

db.once("open", () => {
  console.log("connect to database :: mongodb");
});
