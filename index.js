const vehicle = require('./lib/car')

const car = new vehicle.Car

car.getAll()
car.corolla.addModel("Corolla")
car.getAll()