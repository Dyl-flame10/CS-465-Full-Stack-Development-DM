const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");
const authenticateJWT = require("../middleware/auth");
const asyncHandler = require("../middleware/asyncHandler");

router.route("/register").post(asyncHandler(authController.register));
router.route("/login").post(authController.login);


router.route("/trips").get(asyncHandler(tripsController.tripsList)).post(authenticateJWT, asyncHandler(tripsController.tripsAddTrips));


router.route('/trips/:tripCode').get(asyncHandler(tripsController.tripsFindByCode)).put(authenticateJWT, asyncHandler(tripsController.tripsUpdateTrip));
module.exports = router;