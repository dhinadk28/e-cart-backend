const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser:true,
       
    }).then(con=>{
        console.log(`MongoDB is connected to the host: ${con.connection.host} `)
    })
}

module.exports = connectDatabase;