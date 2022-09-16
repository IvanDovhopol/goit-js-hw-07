import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const itemsMarkup = createItemsImageMarkup(galleryItems);

pushMarkupOnHtml();
galleryRef.addEventListener('click', onGalleryContainerClick);

function createItemsImageMarkup(item) {
	return item
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
			  </a>`;
		})
		.join('');
}

onOpenModalWindow();

function onGalleryContainerClick(e) {
	e.preventDefault();

	if (e.target.nodeName !== 'IMG') {
		return;
	}
}

function onOpenModalWindow() {
	const lightbox = new SimpleLightbox('.gallery a', {
		captionsData: 'alt',
		captionDelay: 250,
	});

	return lightbox;
}

function pushMarkupOnHtml() {
	galleryRef.insertAdjacentHTML('beforeend', itemsMarkup);
}
