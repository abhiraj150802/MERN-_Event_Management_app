import mongoose from "mongoose"


const feedbackSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    comments:{
        type:String,
        required:true
    }
})

const Feedback=mongoose.model("feedback",feedbackSchema)
export default Feedback