import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleries = document.querySelector(".gallery")
    const galleriItem = createGalleryItemsMarkup(galleryItems); 
    function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a href="" class="gallery__link">
                <img
                    class="gallery__image" 
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    }).join("");
 
    }
galleries.insertAdjacentHTML("afterbegin", galleriItem);

// Добавляем слушателя на контейнер

galleries.addEventListener('click', galleryItemsResize);

function galleryItemsResize(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    };
   // Берем код из basic Lightbox
const instance = basicLightbox.create(`
    <img src="${evt.target.contains('${data-source}')}" width="800" height="600">
`)
    instance.show()
  
};

