const {DataTypes} =require('sequelize')
const sequelize= require('../configs/db');
// user model 
const User= sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstName:{type:DataTypes.STRING, allowNull:false},
    lastName:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false,unique:true},
    password:{type:DataTypes.STRING, allowNull:false},
    phone:{type:DataTypes.STRING, allowNull:false},
    gender:{type:DataTypes.STRING, allowNull:false},
    profile_pic:{type:DataTypes.STRING, allowNull:true},

});

module.exports=User; 
