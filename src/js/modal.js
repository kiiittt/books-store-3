(() => {
  const refs = {
    openModalBtn: document.querySelector('.bestsellers-area'),
    openModal: document.querySelector('.category_books_container'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    // modalBackdrop: document.querySelector('[data-modal-backdrop]'),
  };


  refs.openModalBtn.addEventListener('click', toggleModalOpen);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  // refs.modalBackdrop.addEventListener("click", toggleModal);
  window.addEventListener('keydown', handleKeyDown);

  function toggleModalOpen(event) {
    if (event.target.className !== 'bestsellers-book-cover') {
      return;
    }
    refs.modal.classList.toggle('is-hidden');

    // document.body.style.overflow = refs.modal.classList.contains("is-hidden") ? "" : "hidden";
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  }
})();