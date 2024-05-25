import Feedback from "../models/feedbackSchema.js";



const feedbackHandler=async(req,resp)=>{
    const {name,eventName, rating,comments}=req.body;
    
    const newFeedback=new Feedback({name,eventName, rating , comments});
    try{
        await newFeedback.save();
       return resp.status(200).json({message:newFeedback});
    }
    catch(error){
     return resp.status(500).json({ message: error.message });
  }
}

export default feedbackHandler