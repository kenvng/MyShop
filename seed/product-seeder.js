const Product = require("../models/product");

const mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

// create a new product
const product = [
    new Product({
        imagePath: "https://beebom.com/wp-content/uploads/2017/11/Best-MMORPG-Games.jpg?w=730&h=416&crop=1&quality=75",
        title: "World of WarCraft",
        description: "",
        price: 20,
    }),
    new Product({
        imagePath: "",
        title: "",
        description: "",
        price: 20,
    }),
    new Product({
        imagePath: "",
        title: "",
        description: "",
        price: 20,
    }),
    new Product({
        imagePath: "",
        title: "",
        description: "",
        price: 20,
    }),
    new Product({
        imagePath: "",
        title: "",
        description: "",
        price: 20,
    }),
    new Product({
        imagePath: "",
        title: "",
        description: "",
        price: 20,
    }),
    new Product({
        imagePath: "",
        title: "",
        description: "",
        price: 20,
    }),
    new Product({
        imagePath: "",
        title: "",
        description: "",
        price: 20,
    }),
    new Product({
        imagePath: "",
        title: "",
        description: "",
        price: 20,
    }),
];

for (var i =0; i < products.length; i++) {
    products[i].save();
}

// mongoose.disconnect();
const done = 0;
for ()