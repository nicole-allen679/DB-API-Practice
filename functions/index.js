const functions = require('firebase-functions')
const express = require('express')
const { getCars, newCars, updateCars, deleteCars } = require('./src/cars')

const app = express()

app.get('/cars', getCars)
app.post('/cars', newCars)
app.patch('/cars/:carID', updateCars)
app.delete('/cars/:carId', deleteCars)

exports.app = functions.https.onRequest(app)
