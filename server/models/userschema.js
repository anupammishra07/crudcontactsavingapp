const mongoose =require("mongoose");
const userschema= new mongoose.Schema({

    name:{
        type: String,
        required : [true , 'please provide name'],
        maxlength : [40, 'Name should be under 40 characters']
    },
    email:{
        type: String,
        required : [true , 'please provide name'],
        
        unique: true
    },
    company:{
        type: String,
        required : [true , 'please provide company name'],
        maxlength : [40, 'Name should be under 40 characters']
    },

    title:{
        type: String,
        required : [true , 'please provide title'],
        maxlength : [40, 'Title should be under 10 characters']
    },
    
    phoneno :{
        type: String,
        required : [true , 'please provide phone no'],
        maxlength : [10, 'Name should be under 10 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now,

    },
})

module.exports =mongoose.model('User', userschema)