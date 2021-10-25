(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open");
  }
})();


// var scaleDown;
// var visuallyShown = document.querySelector(".visually-shown");
// var visuallyHidden = document.querySelector(".visually-hidden");
// var theVideo = document.querySelector("video");
// var theVideo = document.querySelector("modal__video");

// visuallyShown.addEventListener("scale-down", toggleVisibility);
// visuallyHidden.addEventListener("scale-up", toggleVisibility);

// function toggleVisibility() {
//   scaleDown.classList.toggle(".visually-hidden");
//   document.body.classList.toggle("video");
// }
