const functions = require("firebase-functions");
const express = require('express');
const { getCars, newCars, updateCars, deleteCars } = require("./src/cars");

const app = express()

app.get('/cars', getCars)

exports.app = functions.https.onRequest(app)