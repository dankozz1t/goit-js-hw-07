import { galleryItems } from "./gallery-items.js";
const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", renderGalleryItems());

function renderGalleryItems() {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoomFactor: false,
});
