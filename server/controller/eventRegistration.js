
import EventRegistration from "../models/eventRegistrationSchema.js";

export const userEventRegistration = async (req, resp) => {
    try {
        const { eventId, email,name,eventName } = req.body;
        console.log(eventId, email, name,eventName )

        // Check if the user has already registered for this event
        const exist = await EventRegistration.findOne({ eventId, email });
        if (exist) {
            return resp.status(401).json({ message: 'Already registered for this event' });
        }

        // Create a new registration entry
        const newUser = new EventRegistration({ eventId, email, name,eventName });
        await newUser.save();
        resp.status(200).json({ message: 'Registration successful', user: newUser });
    } catch (error) {
        resp.status(500).json({ message: error.message });
        console.log('Error while event registration:', error.message);
    }
};




