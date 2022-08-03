import { galleryItems } from "./gallery-items.js";
const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", renderGalleryItems());

function renderGalleryItems() {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    )
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoomFactor: false,
});
