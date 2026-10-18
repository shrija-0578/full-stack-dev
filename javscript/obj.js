class Vehicle {
  #vin; // Private field

  constructor(make, model, vin) {
    this.make = make;
    this.model = model;
    this.#vin = vin;
  }

  getDetails() {
    return `${this.make} ${this.model}`;
  }

  getVin() {
    return this.#vin;
  }
}

class ElectricCar extends Vehicle {
  constructor(make, model, vin, batteryCapacity) {
    super(make, model, vin); // Call parent constructor
    this.batteryCapacity = batteryCapacity;
  }

  // Override method
  getDetails() {
    return `${super.getDetails()} (${this.batteryCapacity} kWh)`;
  }
}

const tesla = new ElectricCar("Tesla", "Model 3", "5YJ3E1EA", 75);
console.log(tesla.getDetails()); // "Tesla Model 3 (75 kWh)"