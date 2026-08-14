const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('Trip');
const ApiError = require('../errors/ApiError');

// GET: /trips - list all the trips
// Reguardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async (req, res) => {

    const q = await Model.find({}).exec();

        // Uncomment the following line to show results of the query 
        // on the console
        console.log(q);

    if (!q)
    { // Database returned no data
        throw ApiError.notFound('Trips not found');
    } else { // Return resulting trip list
        return res.status(200).json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip
// Reguardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async (req, res) => {
    const q = await Model.findOne({ 'code' : req.params.tripCode }).exec();

        // Uncomment the following line to show results of the query
        // on the console
        console.log(q);

    if (!q)
    { // Database returned no data
        throw ApiError.notFound('Trip not found');
    } else { // Return resulting trip list
        return res.status(200).json(q);
    }
};

//  POST: /trips - adds a new trip to the database
// Reguardless of outcome, response must include HTML status code  
// and JSON message to the requesting client
const tripsAddTrips = async (req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if (!q)
    { // Database returned no data
        throw ApiError.badRequest('Error creating trip');
    } else { // Return resulting trip list
        return res.status(201).json(q);
    }
};

// PUT: /trips/:tripsCode - Adds a new Trip
// Reguardless of outcome, response must include HTML status code  
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {

    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Model.findOneAndUpdate(
        { 'code' : req.params.tripCode },
        {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
        { new: true }
    )
    .exec();

    if (!q)
    { // Database returned no data
        throw ApiError.notFound('Trip not found');
    } else { // Return resulting updated trip
        return res.status(201).json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrips,
    tripsUpdateTrip
};