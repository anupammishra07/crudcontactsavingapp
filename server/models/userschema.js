const mongoose =require("mongoose");
const validator= require("validator");
const userschema= new mongoose.Schema({

    name:{
        type: String,
        required : [true , 'please provide name'],
        maxlength : [40, 'Name should be under 40 characters']
    },
    email:{
        type: String,
        required : [true , 'please provide email'],
        validate : [validator.isEmail , 'please enter email in correct format'],
        unique: true
    },
    company:{
        type: String,
        required : [true , 'please provide company name'],
        maxlength : [20, 'Name should be under 20 characters']
    },

    title:{
        type: String,
        required : [true , 'please provide title'],
        maxlength : [20, 'Title should be under 20 characters']
    },
    
    phoneno :{
        type: Number,
        required : [true , 'please provide phone no'],
        maxlength : [10, 'Name should be under 10 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now,

    },
})

module.exports =mongoose.model('User', userschema)