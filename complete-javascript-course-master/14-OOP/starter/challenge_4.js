class CarCl {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  acceleration() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
}

class EVCl extends CarCl {
  #battery;
  constructor(brand, speed, battery) {
    super(brand, speed);
    this.#battery = battery;
  }

  chargeBattery(chargeTo) {
    this.#battery = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#battery--;
    console.log(
      `${this.brand} going at ${this.speed} km/h, with a charge of ${
        this.#battery
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate();
rivian.chargeBattery(60);
rivian.accelerate().accelerate().brake().accelerate();
