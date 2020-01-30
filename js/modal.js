let modal = document.querySelector('.modal-cart--form');
let modalShadow = document.querySelector('.modal-cart--form .modal-cart__shadow');
let modalButton = document.querySelector('.modal-cart .btn');
let modalClose = document.querySelector('.modal-cart--form .modal-cart__close');
let modalButtons = document.querySelectorAll(".room__grid a.btn--room");

modalButtons.forEach(button => {
  button.addEventListener("click", () => {
    modalShadow.style.cssText = 'display:block';
    modal.style.cssText = 'display:block';
  });
});

modalButton.addEventListener('click', () => {
  modalShadow.style.cssText = 'display:none';
  modal.style.cssText = 'display:none';

});

modalClose.addEventListener('click', () => {
  modalShadow.style.cssText = 'display:none';
  modal.style.cssText = 'display:none';
})
