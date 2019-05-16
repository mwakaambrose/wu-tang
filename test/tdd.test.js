const ride = require("../lib/car")

test("adds two numbers", () => {
    expect("one").toBe("one")
})

test("new car can be added", () => {
    let car = new ride.Car()
    console.log(car.corolla.all.length)
    car.corolla.addModel("Vista")
    expect(car.corolla.all.length).toBe(2)
})