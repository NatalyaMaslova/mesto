let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_about-me');
let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__about-me');

function popupToggle () {
  if(!popup.classList.contains('popup__opened')) {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    popup.classList.toggle('popup__opened');
  } else {
    popup.classList.toggle('popup__opened');
  }
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popupToggle();
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);