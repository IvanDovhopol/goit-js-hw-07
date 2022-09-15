import { galleryItems } from './gallery-items.js';

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

let instance = '';

function onGalleryContainerClick(e) {
	e.preventDefault();

	if (e.target.nodeName !== 'IMG') {
		return;
	}

	onOpenModalWindow(e);
	onCloseModalWindowKey(e);

	galleryRef.addEventListener('keydown', onCloseModalWindowKey);
}

function onOpenModalWindow(e) {
	instance = basicLightbox.create(`
	    <img src="${e.target.dataset.source}" width="800" height="600">
	`);

	instance.show();
}

function onCloseModalWindowKey(e) {
	if (e.code === 'Escape') {
		instance.close();
	}
}
