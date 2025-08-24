const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send("I'm Santhosh can we be friends?");
});

mongoose.connect("mongodb+srv://santhoshprogrammer07:Sandy@backenddb.y6x3qd5.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB").then(() => {
    console.log("Connected to databse!");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })
})
    .catch(() => {
        console.log("connection to db failed");

    })