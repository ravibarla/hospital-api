import express from "express"
import { router } from "./routes/index.js";



//create server
const app = express();
const port = process.env.PORT || 3200;
app.use("/",router)
app.listen(port,()=>{
    console.log("app running in port :",port)
})
