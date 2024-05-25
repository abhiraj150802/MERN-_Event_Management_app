
import Event from "../models/eventSchema.js";

export const eventList = async(req, resp) => {
    try {
    const events = await Event.find().sort({date:1});
    resp.json(events);
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
};

