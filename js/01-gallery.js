import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const renderGalleryItems = () =>
  galleryItems.reduce(
    (previousValue, { original, preview, description }) =>
      (previousValue += `
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
`),
    ""
  );

galleryEl.insertAdjacentHTML("beforeend", renderGalleryItems());

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  event.target.src = event.target.dataset.source;

  basicLightbox
    .create(event.target.outerHTML, { onShow: closeOnHotKey })
    .show();

  function closeOnHotKey(instance) {
    const onCloseKeyDown = (event) => {
      if (event.key === "Escape") {
        instance.close();
        galleryEl.removeEventListener("keydown", onCloseKeyDown);
      }
    };

    galleryEl.addEventListener("keydown", onCloseKeyDown);
  }
}
