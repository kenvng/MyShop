const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// create another schema running new Schema and then as an argument pass a JS object define that schema
// schema is the blue print of each new entry of database
// we will work with models but models will be based on these blueprint 
const schema = new Schema({
    imagePath: {type: String, required: true}, 
    title: {type: String, required: true}, 
    description: {type: String, required: true}, 
    price: {type: Number, required: true}
});

// EXPORT
module.exports = mongoose.model('Product', schema); 