const mongoose = require('mongoose');
const { Schema } = mongoose;

//SCHEMA
const StockSchema = new Schema({
    symbol: {type: String, required: true},
    likes: {type: [String], default: []}
});

//MODEL
const Stock = mongoose.model('Stock', StockSchema);

exports.Stock = Stock;