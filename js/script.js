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

// //////////////////////////////////////////////////////////////////////////////////
const form = document.getElementById('myForm');
const submitButton = document.getElementById('submit');

const select = document.getElementById('my-select');

let smithDiv = document.querySelector('.extra-form-smith');
let driverDiv = document.querySelector('.extra-form-driver');

const traumas = document.getElementById('traumas');
const notraumas = document.getElementById('notraumas');
const hasinstrument = document.getElementById('hasinstrument');
const noinstrument = document.getElementById('noinstrument');

const addicted = document.getElementById('addicted');
const notaddicted = document.getElementById('notaddicted');
const hascar = document.getElementById('hascar');
const nocar = document.getElementById('nocar');

const showDiv = function () {
  const select = document.getElementById('my-select');
  const selectedOption = select.options[select.selectedIndex].value;

  if (selectedOption === 'smith') {
    smithDiv.style.display = 'block';
    traumas.required = true;
    notraumas.required = true;
    hasinstrument.required = true;
    noinstrument.required = true;
    addicted.required = false;
    notaddicted.required = false;
    hascar.required = false;
    nocar.required = false;
  } else if (selectedOption === 'driver') {
    driverDiv.style.display = 'block';
    traumas.required = false;
    notraumas.required = false;
    hasinstrument.required = false;
    noinstrument.required = false;
    addicted.required = true;
    notaddicted.required = true;
    hascar.required = true;
    nocar.required = true;
  }
};

select.addEventListener('change', showDiv);

const submitForm = function (event) {
  event.preventDefault();

  let nameField = document.getElementById('name').value;
  let surnameField = document.getElementById('surname').value;
  let selectedGender = document.querySelector('input[name="gender"]:checked').nextSibling.textContent.trim();
  let ageField = document.getElementById('Age').value;
  let healthField = document.getElementById('');
  let instrumentField = document.getElementById('');
  let addictField = document.getElementById('');
  let carField = document.getElementById('');
  console.log(nameField, surnameField, selectedGender, ageField);

  form.reset();
  document.getElementById('my-select').options[select.selectedIndex].value = '';
  smithDiv.style.display = 'none';
  driverDiv.style.display = 'none';

  traumas.required = false;
  notraumas.required = false;
  hasinstrument.required = false;
  noinstrument.required = false;
  addicted.required = false;
  notaddicted.required = false;
  hascar.required = false;
  nocar.required = false;
}

form.addEventListener('submit', submitForm);
