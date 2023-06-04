(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-sellers]"),
    closeModalBtn: document.querySelector("[data-modal-close-sellers]"),
    modal: document.querySelector("[data-modal-sellers]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();