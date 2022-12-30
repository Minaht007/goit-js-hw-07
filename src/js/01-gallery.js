import { galleryItems } from './gallery-items.js';
// Change code below this line

window.onload = () => {
  const galleries = document.querySelector(".gallery");
  const galleriItem = createGalleryItemsMarkup(galleryItems);
  function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
                <a href="#" class="gallery__link">
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
  galleries.insertAdjacentHTML("afterbegin", galleriItem);

  // listen the click on the gallery div and pass element data to the image tag
  document.querySelector(".gallery").onclick = (data) => {
    console.log("click image", data);
    const instance = basicLightbox.create(`
      <img src="${data.path[0].currentSrc}" width="800" height="600">
    `);

    instance.show();
  };
};
