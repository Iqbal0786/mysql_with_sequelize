const {Sequelize}= require('sequelize');
const sequelize= new Sequelize('demo_crud','root','',{
    dialect:'mysql',
    host:'localhost',
    logging:false
})
sequelize.sync({force:true})

module.exports= sequelize