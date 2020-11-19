const popup = document.querySelector('.popup');
const editProfilePopup = document.querySelector('.popup_type_edit-profile'); //попап редактирования профиля
const addCardPopup = document.querySelector('.popup_type_add-card'); //попап добавления карточки места
const zoomPhotoPopup = document.querySelector('.popup_type_zoom-photo');
const editProfilePopupOpenButton = document.querySelector('.profile__edit-button');//кнопка ред-я профиля
const editProfilePopupCloseButton = editProfilePopup.querySelector('.popup__close-button_type_edit-profile');//зак-е ред-я пр-я
const addCardPopupOpenButton = document.querySelector('.profile__add-button');//кнопка доб.карточки места
const addCardPopupCloseButton = addCardPopup.querySelector('.popup__close-button_type_add-card');//закр-е попапа нового места
const formElement = document.querySelector('.popup__container_type_edit-profile');//контейнер редакт.проф-я
const cardElement = document.querySelector('.popup__container_type_add-card');//конт-р карточки места
const nameInput = editProfilePopup .querySelector('.popup__field_type_name');//поле ввода ИМЯ
const jobInput = editProfilePopup .querySelector('.popup__field_type_about-me');//поле ввода о себе
const name = document.querySelector('.profile__name');//поле пр-я имя
const job = document.querySelector('.profile__about-me');//поле профиля о себе
const placeNameInput = document.querySelector('.popup__field_type_place-name');//поле ввода наз-я места
const linkInput = document.querySelector('.popup__field_type_link');//поле ввода ссылки
const placesList = document.querySelector('.places__list');//список мест
const zoomedPhoto = document.querySelector('.place__photo_zoom');
const zoomPhotoCloseButton = document.querySelector('.popup__close-button_type_zoom-photo');
const zoomedPhotoCaption = document.querySelector('.place__title_zoomed');
const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const placeTemplate = document.querySelector('.place-template').content;

//функция создания карточки
function createCard(cardData) {
  const placeElement = placeTemplate.cloneNode(true);
  placeElement.querySelector('.place__photo').src = cardData.link;
  placeElement.querySelector('.place__photo').alt = cardData.name;
  placeElement.querySelector('.place__title').textContent = cardData.name;
  placeElement.querySelector('.place__like').addEventListener('click', function(evt) {
      evt.target.classList.toggle('place__like_active');
    });
  placeElement.querySelector('.place__delete').addEventListener('click', function(evt) {
      evt.target.parentElement.remove();
    });
  placeElement.querySelector('.place__photo').addEventListener('click', zoomPhoto);
  
    return placeElement;
}

//функция отрисовки карточек "из коробки"
function render () {
  initialCards.forEach(cardData => {
    const placeElement = createCard(cardData)
    placesList.append(placeElement);
  });
}

//функия добавления карточек на страницу
function addCard (evt) {
  const cardData = {
    link:linkInput.value,
    name: placeNameInput.value
  };
  evt.preventDefault(); 
  const placeElement = createCard(cardData);
  placesList.prepend(placeElement);
  popupAddCard();
}

//ф-ция редактирования профиля
function formSubmitHandler (evt) {
  evt.preventDefault(); 
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popupEditProfileToggle();
}

//функция закрытия попапов
function popupToggle (popup) {
  popup.classList.toggle('popup_opened');
}

//ф-ция открытия попапа редактирования профиля
function popupEditProfileToggle () {
  if(!editProfilePopup.classList.contains('popup_opened')) {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
  };
    popupToggle(editProfilePopup);
}

//ф-ция открытия попапа добавления карточки
function popupAddCard () {
  if(!addCardPopup.classList.contains('popup_opened')) {
    placeNameInput.value = '';
    linkInput.value = '';
  };
    popupToggle(addCardPopup);
}
  
//фун-ция зума фото
function zoomPhoto (event) {
  if(!zoomPhotoPopup.classList.contains('popup_opened')) {
    const openPhoto = event.target;
    zoomedPhoto.src = openPhoto.src;
    zoomedPhoto.alt = openPhoto.alt;
    zoomedPhotoCaption.textContent = openPhoto.alt;
  };
    popupToggle(zoomPhotoPopup);
};

render();

//слушатели для попапа ред-я профиля
editProfilePopupOpenButton.addEventListener('click', popupEditProfileToggle);
editProfilePopupCloseButton.addEventListener('click', () => popupToggle(editProfilePopup));
formElement.addEventListener('submit', formSubmitHandler);

//слушатели для попапа нового места
addCardPopupOpenButton.addEventListener('click', popupAddCard);
addCardPopupCloseButton.addEventListener('click', () => popupToggle(addCardPopup));
cardElement.addEventListener('submit', addCard);

//слушатель для попапа зума фото
zoomPhotoCloseButton.addEventListener('click', () => popupToggle(zoomPhotoPopup));