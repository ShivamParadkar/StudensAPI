const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:3
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new console.error('email is not valid');
            }
        }
    },
    phone:{
        type: Number,
        min:10,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    }
})


const Student = new  mongoose.model('Student',studentSchema);

module.exports = Student;