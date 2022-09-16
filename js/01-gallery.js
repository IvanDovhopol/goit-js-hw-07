import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const itemsMarkup = createItemsImageMarkup(galleryItems);

pushMarkupOnHtml();
galleryRef.addEventListener('click', onGalleryContainerClick);

let instance = '';

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

function onGalleryContainerClick(e) {
	e.preventDefault();

	if (e.target.nodeName !== 'IMG') {
		return;
	}

	galleryRef.addEventListener('keydown', onCloseModalWindowKey);

	onOpenModalWindow(e);
	onCloseModalWindowKey(e);
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
		galleryRef.removeEventListener('keydown', onCloseModalWindowKey);
	}
}

function pushMarkupOnHtml() {
	galleryRef.insertAdjacentHTML('beforeend', itemsMarkup);
}
