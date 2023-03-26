'use strict';

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

const bmw = new Car('BMW', 120);

bmw.acceleration();
bmw.brake();
