var admin = require('firebase-admin')
var serviceAccount = require('../../credentials.json')

let db;

function reconnectToFirestore() {
  if (!db) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    })
    db = admin.firestore()
  }
}

exports.getCars = (req, res) => {
  reconnectToFirestore()
  
  db.collection('cars')
  .get()
  .then(allData => {
      let usedCars = []
      allData.forEach(car => {
      usedCars.push(car.data())
      })
      res.send(usedCars)
    })
    .catch((err) => console.log(err))
}

exports.newCars = (req, res) => {
  reconnectToFirestore()
  const newData = req.body
  db.collection('cars')
    .add(newData)
    .then(() => this.getCars(req,res))
}
exports.getMultipleCars = (req, res) => {
  reconnectToFirestore()
  const newData = req.body
  newData.forEach((car, index) => {
    db.collection('cars').add(car)
      .then(() => {
        if(index === newData.length - 1) {
          this.gethCars(req, res)
        }
      })
      .catch(err => res.send('Error creating car: ' + err.message))
  })
}
exports.updateCars = (req, res) => {
  res.send('updated car')
}
exports.deleteCars = (req, res) => {
  res.send('car is deleted')
}
