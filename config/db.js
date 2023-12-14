const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL;

const ConnectDB = async ()=>{
    try{
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB database is connected!");
    } catch(error){
        console.error(error.message);
        process.exit(1);
    }
}

console.log(MONGODB_URL);
module.exports = ConnectDB;