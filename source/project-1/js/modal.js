(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    refs.modal.classList.toggle("is-hidden");
    window.addEventListener('keydown', handleEcsClose);
  }

  function closeModal() {
    refs.modal.classList.toggle("is-hidden");
    window.removeEventListener('keydown', handleEcsClose);
  }

  function handleEcsClose(evt) {
    if (evt.code === "Escape") {
      closeModal();
      return;
    }
    console.log(evt);
  }
})();
