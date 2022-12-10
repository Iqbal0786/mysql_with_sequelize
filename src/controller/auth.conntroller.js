require('dotenv').config();
const express= require('express');
const jwt = require('jsonwebtoken');
const User = require("../model/user.model");
const { comparePassword, hashPassword } = require('../utils/password.utils');

// function to create new token
const newToken= (user)=>{
    return  jwt.sign({user}, process.env.JWT_SECRET_KEY,);

}


const login = async(req,res)=>{
    try {
        let user= await User.findOne({where:{email:req.body.email}});

        if(!user){
            return res.status(400).send({message:"Please check your email or passowrd"});
        }
        if(!comparePassword(req.body.password, user.password)){
         return res.status(400).send({message:"Please check your email or passowrd"});
        }

        const token=newToken(user);
        const {id,firstName,lastName,email,phone,gender,profile_pic,createdAt,updatedAt,}=user;
     
        return res.status(200).send({user: 
       { id,firstName,lastName,email,phone,gender,profile_pic,createdAt,updatedAt},token});
         
    } catch (error) {
        return res.status(500).send(error);
    }
}

const register= async(req,res)=>{
    try {
        let user= await User.findOne({where:{email:req.body.email}});

        if(user){
            return res.status(400).send({message:"Email has already been taken"});

        }
       user =   await User.create({...req.body , password:hashPassword(req.body.password)});
     const token=newToken(user);
     return res.status(200).send({user,token});

    } catch (error) {
        res.status(500).send(error);
        
    }
}

module.exports={login,register};