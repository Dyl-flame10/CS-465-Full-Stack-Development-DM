const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: list of all trips
// Response must include HTML code + JSON message to requesting client
const tripsList = async(req,res) => {
    const q = await Model
        .find({}) // return all trips in list
        .exec();

    console.log(q); // Show query results in console

    if (!q)
    {
        return res
            .status(404) // DB returned no data
            .json(err);
    } else {
        return res
            .status(200) //DB returns trip list
            .json(q);
    }

};

// GET: trip by code parameter
// Response must include HTML code + JSON message to requesting client
const tripsFindByCode = async(req,res) => {
    const q = await Model
        .find({'code' : req.params.tripCode})
        .exec();

    console.log(q); // Show query results in console

    if (!q)
    {
        return res
            .status(404) // DB returned no data
            .json(err);
    } else {
        return res
            .status(200) //DB returns trip list
            .json(q);
    }

};

module.exports = {
    tripsList,
    tripsFindByCode
};