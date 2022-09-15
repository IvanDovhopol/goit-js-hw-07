import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const itemsMarkup = createItemsImageMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', itemsMarkup);

function createItemsImageMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>`;
		})
		.join('');
}
