const epxress= require('express');
const app= epxress();
const cors= require('cors');
const sequelize = require('../src/configs/db');
const userController= require('../src/controller/user.controller');


app.use(epxress.json());
app.use(cors());
app.use('/users',userController);


app.listen(8888,async()=>{
    try {
        await sequelize.authenticate();
        console.log('listening port number 8888')
        
    } catch (error) {
        console.log('error while connecting to db', error.message)
    }
})