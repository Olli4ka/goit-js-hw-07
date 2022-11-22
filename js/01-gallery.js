import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
	gallery: document.querySelector(".gallery"),
};
const galleryList = makeGalleryItems(galleryItems);
refs.gallery.insertAdjacentHTML("beforeend", galleryList);

refs.gallery.addEventListener("click", (evt) => {
	evt.preventDefault();
	if (evt.target.nodeName !== "IMG") {
		return;
	}
	const instance = basicLightbox.create(
		`<img src="${evt.target.dataset.source}" width="800" height="600"/>`,
		{
			onShow: (instance) => {
				refs.gallery.addEventListener("keydown", onEscapeButton);
			},
			onClose: (instance) => {
				refs.gallery.removeEventListener("keydown", onEscapeButton);
			},
		}
	);
	instance.show();

	function onEscapeButton(evt) {
		if (evt.key === "Escape") {
			instance.close();
		}
	}
});

function makeGalleryItems(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
      <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `;
		})
		.join("");
}
