const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Products = new Schema({
    name: {
        type: String
    },
    introduce: {
        type: String
    },
    price: {
        type: Number
    },
    author: {
        type: String
    }
}, {
    collection: 'products'
});

module.exports = mongoose.model('Products', Products);