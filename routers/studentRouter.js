const express = require('express');
const router = new express.Router();

const Student = require('../model/student');


router.post('/students', async(req, res)=>{
    try {
        const user = new Student(req.body);

         const createUser = await user.save();

        res.status(201).send(createUser);
    }
    catch (e) {
        res.status(400).send("Error: " + e.message);
    }
})

router.get('/students', async(req, res)=>{
    try {
        const studentData = await Student.find();
        res.send(studentData);
    }
    catch (e) {
        res.status(400).send("Error: " + e.message);
    }
})

router.get('/students/:id', async(req, res)=>{
    try {
        const _id = req.params.id;
        const studentid = await Student.findById(_id);

        if(!studentid) {
            res.status(404).send();
        }
        else {
            res.send(studentid);
        }
    }
    catch (e) {
        res.status(500).send("Error: " + e.message);
    }
})

// router.patch('/students/:id', async(req, res)=>{
//     try {
//         const _id = req.params.id;
//         const updateStudentbyid = await Student.findByIdAndUpdate(_id,req.body,{new:true});
//         res.status(200).send(updateStudentbyid);
//     }
//     catch (e) {
//         res.status(400).send(e.message);
//     }
// })

router.patch('/students/:name', async(req, res)=>{
    try {
        const Sname = req.params.name;
        const updateStudent = await Student.findOneAndUpdate({name:Sname},req.body,{new:true});
        res.status(200).send(updateStudent);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
})

router.delete('/students/:name', async(req, res)=>{
    try {
        const Sname = req.params.name;
        const deleteStudent = await Student.findOneAndDelete({name:Sname});

        if(!Sname){
            return res.status(400);
        }
        res.status(200).send(deleteStudent);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
})

module.exports = router;