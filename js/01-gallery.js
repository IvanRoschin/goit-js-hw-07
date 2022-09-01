import { galleryItems } from "./gallery-items.js";

// Change code below this line
let instance;

//1.Создание и рендер разметки
const galleryCountainer = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `
<div class="gallery__item">
     <a class="gallery__link" href='${original}'>
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

galleryCountainer.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  window.addEventListener("keydown", onEscKeyPress);

  let largeImageUrl = event.target.dataset.source;
  let description = event.target.alt;

  onOpenModal(largeImageUrl, description);
}

//3. Подключение скрипта и стилей библиотеки модального окна basicLightbox.

//4. Открытие модального окна по клику на элементе галереи.

function onOpenModal(largeImageUrl, description) {
  instance = basicLightbox.create(
    `
  
     <img src = '${largeImageUrl}' width = '800' height = '600' alt ='${description}'>
  `,
    {
      onClose: () => window.removeEventListener("keydown", onEscKeyPress), // Как проверить?
    }
  );
  instance.show();
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE; //равенство в переменную

  if (isEscKey) {
    window.removeEventListener("keydown", onEscKeyPress);
    console.log("Удалил слушатель по клику ESC");

    instance.close();
  }
}
