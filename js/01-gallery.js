import { galleryItems } from './gallery-items.js';
// Change code below this line

// Plan =>
/*
 * 1) Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

 * 2) Реализация делегирования на div.gallery и получение url большого изображения.
 * 
 * 3) Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
 * Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
 * 
 * 4) Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
 * 
 * 5) Замена значения атрибута src элемента <img> в модальном окне перед открытием.
 * Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
 */

const galleryRef = document.querySelector('.gallery');
const itemsMarkup = createItemsImageMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', itemsMarkup);

function createItemsImageMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div> `;
    })
    .join('');
}

galleryRef.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(e) {
  e.preventDefault();
  const isClassGalleryImage = e.target.classList.contains('gallery__image');

  if (!isClassGalleryImage) {
    return;
  }

  console.log(e.target.attributes.alt);
}
