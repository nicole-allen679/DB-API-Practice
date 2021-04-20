var admin = require("firebase-amin")
var serviceAccount = require("../../CredentialsContainer.json")

admin.initalizeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

exports.getCars = (req, res) => {
    res.send('got cars')
}
exports.newCars = (req, res) => {
    res.send('created new car')
}
exports.updateCars = (req, res) => {
    res.send('updated car')
}
exports.deleteCars = (req, res) => {
    res.send('car is deleted')
}