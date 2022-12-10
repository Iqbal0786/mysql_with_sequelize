const express = require('express');
const router=express.Router();
const User= require("../model/user.model");


router.get('/', async(req,res)=>{
    try {
        const users= await User.findAll();
         return res.status(200).send(users);
        
         
    } catch (error) {
        return res.status(500).send(error);

    }
})

router.post('', async(req,res)=>{
     try {

         const user= await User.create(req.body);
         return res.status(201).send(user);
        
     } catch (error) {
        return res.status(500).send(error);

     }
})

// find user by id
 router.get('/:id', async(req,res)=>{
      try {
          const user= await User.findByPk(req.params.id);
          return res.status(200).send(user);
         
      } catch (error) {
        return res.status(500).send(error);
        
      }
    })


module.exports=router;
