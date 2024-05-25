import dotenv from "dotenv"
import cors from "cors";
import express from "express";
import mongoose from 'mongoose';
import router from "./routes/routing.js";
import bodyParser from "body-parser";

dotenv.config();




const app = express();
app.use(bodyParser.json())

const MONGO_URI=process.env.MONGO_URI
const PORT = process.env.PORT || 5000;
// Connect to database
try {
    mongoose.connect(MONGO_URI)
    console.log("Connected to database")
} catch (error) {
    console.log(error)
}



// Middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/',router)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));




