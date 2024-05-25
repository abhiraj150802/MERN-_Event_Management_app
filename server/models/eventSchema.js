
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  time: String,
  registrationFee: Number
});

const Event=mongoose.model("event",eventSchema)
export default Event