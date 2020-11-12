const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Booking = require('../../models/Bookings');
const {check,validationResult} = require('express-validator')

router.get('/', async (req, res) => {
  try {
    const posts = await Booking.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  });

  // create post 

router.post('/create',[
  check('guardianname', 'Guardian Name is required')
    .not()
    .isEmpty(),
  check('studentname', 'Student name is required').not().isEmpty(),
  check(
    'subject',
    'Please enter Subject'
  ).not().isEmpty(),
  check(
    'topic',
    'Please enter topic'
  ).not().isEmpty()
],
  async(req,res)=>{

       
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { guardianname,studentname,subject,topic,appointment} = req.body;
    try {  
      const newPost = new Booking({
        guardianname:guardianname,
        studentname:studentname,
        topic:topic,subject:subject,appointment:appointment
      
    });

    const response = await newPost.save();
    return res.json(response)
     

    
     
   } catch (err) {

        console.error(err.message);
        res.status(500).send('Server Error');
    }
     
  })



  router.delete('/:id', async (req, res) => {
    try {
      const post = await Booking.findById(req.params.id);
  
      
      await post.remove();
  
      res.json({ msg: 'Content removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });


  router.put('/:id', async (req, res) => {
    try {
       
      const post = await Booking.findById(req.params.id);
     
      if(req.body.guardianname){
        post.guardianname = req.body.guardianname
      }

      if(req.body.studentname){
        post.studentname = req.body.studentname
      }

      if(req.body.subject){
        post.subject = req.body.subject
      }

      if(req.body.topic){
        post.topic = req.body.topic
      }

      if(req.body.appointment){
        post.appointment = req.body.appointment
      }
      
      const response = await post.save()

      return res.json(response)

 
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });


  module.exports=router
