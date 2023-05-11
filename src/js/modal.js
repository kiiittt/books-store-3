(() => {
  const refs = {
    openModalBtn: document.querySelector(".bestsellers-book-item"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalBackdrop: document.querySelector("[data-modal-backdrop]"),
  };


  console.log(refs.openModalBtn);

  // refs.openModalBtn.addEventListener("click", toggleModalOpen);
  // refs.closeModalBtn.addEventListener("click", toggleModal);
  // refs.modalBackdrop.addEventListener("click", toggleModal);
  window.addEventListener("keydown", handleKeyDown);

  function toggleModalOpen() {
    refs.modalBackdrop.classList.toggle("is-hidden");
    document.body.style.overflow = refs.modalBackdrop.classList.contains("is-hidden") ? "" : "hidden";
}

function toggleModal() {
    refs.modalBackdrop.classList.toggle("is-hidden");
}

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      refs.modalBackdrop.classList.add("is-hidden");
    }
  }
})();
