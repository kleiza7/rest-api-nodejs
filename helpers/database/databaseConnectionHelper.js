const mongoose = require('mongoose');

//veri tabanına bağlantı için controller
const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser:true
    });

    mongoose.connection.on('connected', ()=>{
        console.log("Successfully connected to the database.");
    });
};


module.exports = connectDatabase;
