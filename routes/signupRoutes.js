const express = require("express");
const { signup, allUsers } = require("../controllers/signupController");

const router=express.Router();

router.post('/signup',signup);
router.get('/alluser',allUsers);
module.exports=router;