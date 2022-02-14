const mongoose = require('mongoose');

//DATABASE SETUP
const databaseURI = process.env['DB']
const db = mongoose.connect(databaseURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = db;