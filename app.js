const express = require('express');
const app = express();
require('./db/connection');

const studentRouter = require('./routers/studentRouter');

port = process.env.PORT || 80;

const Student = require("./model/student");

app.use(express.json());
app.use(studentRouter);

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})