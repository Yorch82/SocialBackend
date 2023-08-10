const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

const dbConnection = async() => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Base de datos iniciada con éxito");
    } catch (error) {
        console.error(error);
        throw new Error("Error al iniciar la base de datos");
    }        
};

module.exports = {
    dbConnection,
};