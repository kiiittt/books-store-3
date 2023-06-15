const refs = {
  openModalBtn: document.querySelector('.bestsellers-area'),
  openModal: document.querySelector('.category_books_container'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalContainer: document.querySelector('.modal'),
};

refs.openModalBtn.addEventListener('click', toggleModalOpen);
refs.closeModalBtn.addEventListener('click', toggleModal);
window.addEventListener('keydown', handleKeyDown);
refs.modal.addEventListener('click', handleClickOutsideModal);

function toggleModalOpen(event) {
  if (event.target.className !== 'bestsellers-book-cover') {
    return;
  }
  refs.modal.classList.toggle('is-hidden');
  refs.modalContainer.classList.toggle('is-hidden');
}

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.modalContainer.classList.toggle('is-hidden');
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    refs.modal.classList.add('is-hidden');
    refs.modalContainer.classList.add('is-hidden');
  }
}

function handleClickOutsideModal(event) {
  if (event.target === refs.modal) {
    refs.modal.classList.add('is-hidden');
    refs.modalContainer.classList.add('is-hidden');
  }
}
