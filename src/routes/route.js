const express = require("express");
const router = express.Router();

const {createStudent}=require("../controller/stuentController")



router.post("/createStudent",createStudent)

module.exports=router