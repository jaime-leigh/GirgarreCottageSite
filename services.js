//services

var libraryModal = document.getElementById('libraryModal');
var libraryBtn = document.getElementById('libraryBtn');
var librarySpan = document.getElementsByClassName(
  'services__close--library'
)[0];

libraryBtn.onclick = function () {
  libraryModal.style.display = 'block';
};

librarySpan.onclick = function () {
  libraryModal.style.display = 'none';
};

var classesModal = document.getElementById('classesModal');
var classesBtn = document.getElementById('classesBtn');
var classesSpan = document.getElementsByClassName(
  'services__close--classes'
)[0];

classesBtn.onclick = function () {
  classesModal.style.display = 'block';
};

classesSpan.onclick = function () {
  classesModal.style.display = 'none';
};

var carModal = document.getElementById('carModal');
var carBtn = document.getElementById('carBtn');
var carSpan = document.getElementsByClassName('services__close--car')[0];

carBtn.onclick = function () {
  carModal.style.display = 'block';
};

carSpan.onclick = function () {
  carModal.style.display = 'none';
};

var mealsModal = document.getElementById('mealsModal');
var mealsBtn = document.getElementById('mealsBtn');
var mealsSpan = document.getElementsByClassName('services__close--meals')[0];

mealsBtn.onclick = function () {
  mealsModal.style.display = 'block';
};

mealsSpan.onclick = function () {
  mealsModal.style.display = 'none';
};

var assistModal = document.getElementById('assistModal');
var assistBtn = document.getElementById('assistBtn');
var assistSpan = document.getElementsByClassName('services__close--assist')[0];

assistBtn.onclick = function () {
  assistModal.style.display = 'block';
};

assistSpan.onclick = function () {
  assistModal.style.display = 'none';
};

var gardenModal = document.getElementById('gardenModal');
var gardenBtn = document.getElementById('gardenBtn');
var gardenSpan = document.getElementsByClassName('services__close--garden')[0];

gardenBtn.onclick = function () {
  gardenModal.style.display = 'block';
};

gardenSpan.onclick = function () {
  gardenModal.style.display = 'none';
};

var cdsModal = document.getElementById('cdsModal');
var cdsBtn = document.getElementById('cdsBtn');
var cdsSpan = document.getElementsByClassName('services__close--cds')[0];

cdsBtn.onclick = function () {
  cdsModal.style.display = 'block';
};

cdsSpan.onclick = function () {
  cdsModal.style.display = 'none';
};

var foodModal = document.getElementById('foodModal');
var foodBtn = document.getElementById('foodBtn');
var foodSpan = document.getElementsByClassName('services__close--food')[0];

foodBtn.onclick = function () {
  foodModal.style.display = 'block';
};

foodSpan.onclick = function () {
  foodModal.style.display = 'none';
};

window.addEventListener('click', function (event) {
  if (event.target == libraryModal) {
    libraryModal.style.display = 'none';
  }

  if (event.target == classesModal) {
    classesModal.style.display = 'none';
  }
  if (event.target == carModal) {
    carModal.style.display = 'none';
  }

  if (event.target == mealsModal) {
    mealsModal.style.display = 'none';
  }

  if (event.target == assistModal) {
    assistModal.style.display = 'none';
  }

  if (event.target == gardenModal) {
    gardenModal.style.display = 'none';
  }

  if (event.target == cdsModal) {
    cdsModal.style.display = 'none';
  }

  if (event.target == foodModal) {
    foodModal.style.display = 'none';
  }
});
