import express from 'express'
import { userLogin, userSignup } from "../controller/userController.js";
import { eventList } from '../controller/eventController.js';
import { userEventRegistration } from '../controller/eventRegistration.js';
import feedbackHandler from '../controller/feedbackController.js';



const router=express.Router();


router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/events',eventList)
router.post('/eventregistration',userEventRegistration)
router.post('/feedback',feedbackHandler)



export default router;