const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const BookingSchema = new Schema ({

    guardianname:{
        type:String,
        required:true
    },
    studentname:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    appointment:{
        type:String,
    }

    
})

 
module.exports = Booking = mongoose.model('bookings',BookingSchema);