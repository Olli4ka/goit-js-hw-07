import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
	gallery: document.querySelector(".gallery"),
};
const galleryList = makeGalleryItems(galleryItems);
refs.gallery.insertAdjacentHTML("beforeend", galleryList);

function makeGalleryItems(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
			<img class="gallery__image" src="${preview}" alt="${description}" />
			</a>`;
		})
		.join("");
}
const lightbox = new SimpleLightbox(".gallery__item", {
	captionsData: "alt",
	captionDelay: 250,
});
