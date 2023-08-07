'use strict';

const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//////////////////////////////////////////////////////////////

function toggleModal() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', toggleModal);
}
btnCloseModal.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) toggleModal();
});
