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

//5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки
