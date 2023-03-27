const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.acceleration = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (brand, speed, battery) {
  Car.call(this, brand, speed);
  this.battery = battery;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.battery--;
  console.log(
    `${this.brand} going at ${this.speed} km/h, with a charge of ${this.battery}%`
  );
};

const tesla = new EV('tesla', 120, 90);
console.log(tesla);
tesla.chargeBattery(50);
console.log(tesla);
tesla.accelerate();
tesla.brake();
