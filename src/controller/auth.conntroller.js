require('dotenv').config();
const express= require('express');
const jwt = require('jsonwebtoken');
const User = require("../model/user.model")

// function to create new token
const newToken= (user)=>{
    return  jwt.sign({user}, process.env.JWT_SECRET_KEY,);

}


const login = async(req,res)=>{
    try {
        let user= await User.findOne({email: req.body.email});
        if(!user){
            return res.status(400).send({message:"Please check your email or passowrd"});
        }
         
    } catch (error) {
        return res.status(500).send(error);
    }
}