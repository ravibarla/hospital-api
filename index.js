import express, { urlencoded } from "express";
import { router } from "./routes/index.js";
import { db } from "./config/mongoose.js";
import swaggerDocs from "./swagger.js";

//create server
const app = express();
const port = process.env.PORT || 3200;
//set up url encoded
app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.listen(port, () => {
  console.log("app running in port :", port);
});
swaggerDocs(app,port)