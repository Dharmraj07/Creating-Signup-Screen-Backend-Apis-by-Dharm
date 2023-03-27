const { where } = require('sequelize');
const User=require('../models/signup');

exports.signup=async(req,res)=>{
    const {name,email,password}=req.body;
      // Check if email already exists in the database
    const user=await User.findOne({where:{email:email}});
    if(user){
        return res.status(400).json({ message: 'User already exists' });
       return;
    }

     // Create a new user
  try {
    const newUser = await User.create({
      name: name,
      email: email,
      password: password
    });
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

exports.allUsers=async(req,res)=>{
    try {
        const users=await User.findAll();
        return res.status(201).json(users);
    } catch (error) {
        console.error(error);
    }
}

