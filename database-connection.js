const mongoose = require('mongoose');

//DATABASE SETUP
const databaseURI = process.env.DB;
console.log('URI')
console.log(databaseURI)
const db = mongoose.connect(databaseURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

console.log("database")
console.log(db)

module.exports = db;