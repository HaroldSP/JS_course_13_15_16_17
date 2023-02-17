/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

'strict';

class Person {
  constructor (name, surname, gender, age) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.age = age;
  };

  get newName () { return this.name };
  get newSurname () { return this.surname };
  get newGender () { return this.gender };
  get newAge () { return this.age };

  set newName (value) { this.name = value };
  set newSurname (value) { this.surname = value };
  set newGender (value) { this.gender = value };
  set newAge (value) { this.age = value };
};

class Smith extends Person {
  constructor (name, surname, gender, age, health, instrument) {
    super(name, surname, gender, age);
    this.health = health;
    this.instrument = instrument;
  }

  get newHealth () { return this.health };
  get newInstrument () { return this.instrument };

  set newHealth (value) { this.health = value };
  set newInstrument (value) { this.instrument = value };
};

class Driver extends Person {
  constructor (name, surname, gender, age, addict, car) {
    super(name, surname, gender, age);
    this.addict = addict;
    this.car = car;
  }

  get newAddict () { return this.addict };
  get newCar () { return this.car };

  set newAddict (value) { this.addict = value };
  set newCar (value) { this.car = value };
};
