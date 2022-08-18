import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const galleryCountainer = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `
<div class="gallery__item">
     <a class="gallery__link" href='${original}' rel = "noopener noreferrer">
       <img
         class="gallery__image"
         src='${preview}'
         data-source='${original}'
        alt='${description}'
       />
    </a>
  </div>
`
  )
  .join("");

galleryCountainer.insertAdjacentHTML("afterbegin", markup);

console.log(galleryCountainer);

//2. Реализация делегирования на div.gallery и получение url большого изображения.

//3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

//4. Открытие модального окна по клику на элементе галереи.

/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModal() {
  window.addEventListener("keydown", onEscKeyPress);
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  document.body.classList.remove("show-modal");
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    console.log("Клик по бекдроп");
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  console.log("event.code", event.code);
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE; //равенство в переменную

  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}

//5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки
