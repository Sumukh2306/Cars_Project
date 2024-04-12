// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Car = require('./carModel');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/carDB'; // Replace with your MongoDB connection URI

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

app.use(bodyParser.json());

// API to add a new car data
app.post('/cars', async (req, res) => {
    try {
        const newCar = await Car.create(req.body);
        res.status(201).json(newCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// API to get all cars data
//this is working now
app.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// API to search for cars based on features
app.get('/cars/search', async (req, res) => {
    try {
        const query = req.query;
        const cars = await Car.find(query);
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//id based search ahh have to do detructing via db wait let me see once
server.get('/cars/:id', (req,res)=>{
  const {id} = req.params;
  const filtered = Customer.find(cus=>{
    const finded = cus.id == id ;
    return finded;
  })
  res.json(filtered);
})



// API to delete a car data
app.delete('/cars/:id', async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.json({ message: 'Car deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
