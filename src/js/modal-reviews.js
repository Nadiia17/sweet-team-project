(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-reviews]"),
    closeModalBtn: document.querySelector("[data-modal-close-reviews]"),
    modal: document.querySelector("[data-modal-reviews]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();