const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);