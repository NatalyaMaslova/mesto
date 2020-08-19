let popup = document.querySelector(".popup");
let popupOpenButton = document.querySelector(".edit-button");
let popupCloseButton = popup.querySelector('.popup__close-button');

let popupToggle = function() {
  popup.classList.toggle("popup__opened");
}

popupOpenButton.addEventListener("click", popupToggle);
popupCloseButton.addEventListener("click", popupToggle);


let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector(".popup__field_type_name");
let jobInput = document.querySelector(".popup__field_type_about-me");
let name = document.querySelector(".profile__name");
let job = document.querySelector(".profile__about-me");

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popup.classList.remove("popup__opened");
}

formElement.addEventListener('submit', formSubmitHandler);