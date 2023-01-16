'use strict';

// selecting a text pop-up window
const modal = document.querySelector('.modal');
// selecting overlay -smear
const overlay = document.querySelector('.overlay');
// selecting overlay -smear
const btnCloseModal = document.querySelector('.close-modal');
// selecting all three buttons querySelector + !!!All!!!
// allows you to select all three buttons (otherwise only the first one worked)
const btnsOpenModal = document.querySelectorAll('.show-modal');

// function to open the window and blur (remove from class list class hidden)
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// window closing function and blur (adds hiding)
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// event on all three buttons
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

// keyboard event e- the object contains information about the event
// e.key -> because key:Enter or key:Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
