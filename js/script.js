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
let selectedOption = select.options[select.selectedIndex].value;

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

let data = [];
if (localStorage.data !== undefined) data = JSON.parse(localStorage.getItem('data', data));

const showDiv = function () {
  const select = document.getElementById('my-select');
  selectedOption = select.options[select.selectedIndex].value;

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

const render = function () {
  let table = document.getElementById('myTable');

  for (let i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  data.forEach(function (item, index) {
    let newRow = table.insertRow();
    const cols = 9;

    const keys = Object.keys(item);
    console.dir(keys[0]);
    for (let i = 0; i < cols; i++) {
      const cell = newRow.insertCell();
      cell.innerHTML = item[keys[i]];
      // console.dir(item);
    }
    // li.querySelector('.todo-remove').addEventListener('click', function () {
    //   data.splice(index, 1);
    //   localStorage.clear();
    //   render();
    // })
  })

  localStorage.setItem('data', JSON.stringify(data));
};

const submitForm = function (event) {
  event.preventDefault();

  let nameField = document.getElementById('name').value;
  let surnameField = document.getElementById('surname').value;
  let selectedGender = document.querySelector('input[name="gender"]:checked').nextSibling.textContent.trim();
  let ageField = document.getElementById('Age').value;

  if (selectedOption === 'smith') {
    let healthField = document.querySelector('input[name="health"]:checked').nextSibling.textContent.trim();
    let instrumentField = document.querySelector('input[name="instrument"]:checked').nextSibling.textContent.trim();

    const newSmith = new Smith(nameField, surnameField, selectedGender, ageField, healthField, instrumentField);
    // console.log(newSmith);
    data.push(newSmith);
    //
  } else if (selectedOption === 'driver') {
    let addictField = document.querySelector('input[name="addict"]:checked').nextSibling.textContent.trim();
    let carField = document.querySelector('input[name="car"]:checked').nextSibling.textContent.trim();

    const newDriver = new Driver(nameField, surnameField, selectedGender, ageField, addictField, carField);
    data.push(newDriver);
  };
  // console.log(data);

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

  render();
}

form.addEventListener('submit', submitForm);

function deleteRow (btn) {
  let row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
};
