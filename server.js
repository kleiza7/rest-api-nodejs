const express = require('express');
const routers = require('./routers/index');
const dotenv = require('dotenv');
const connectDatabase = require('./helpers/database/databaseConnectionHelper');
const app = express();
const customErrorHandler = require('./middlewares/errors/customErrorHandler');

//Enviroment Variables

dotenv.config({
    path: "./config/config.env"
});

const PORT = process.env.PORT || 5000;

connectDatabase(); //db bağlantı için fonksiyon

app.use(express.json()); //response olarak json çevirebilmemiz için bu metod gerekli

app.use('/api', routers); // /api şeklinde bir istekte bulunulduğunda yönlendiğimiz router

app.use(customErrorHandler); //kendi error handlerimiz

app.listen(PORT,()=>{  
    console.log(`App Started at port : ${PORT}`);
});

