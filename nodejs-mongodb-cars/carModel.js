// carModel.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    color: { type: String, required: true },
    speed: { type: Number, required: true },
    year: { type: Number, required: true },
    mileage: { type: Number, required: true },
    transmission: { type: String, enum: ['Manual', 'Automatic'], required: true },
    fuelType: { type: String, enum: ['Petrol', 'Diesel', 'Electric'], required: true },
    price: { type: Number, required: true },
    features: { type: [String], required: true }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
