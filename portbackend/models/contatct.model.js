import mongoose from "mongoose";    

const contactForm= new mongoose.Schema({

    name:{
        type:String,
        required:true 
    },

    email:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true 
    }
})

export const Contact = mongoose.model("Conatct",contactForm)