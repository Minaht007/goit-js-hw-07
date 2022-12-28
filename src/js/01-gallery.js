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
// console.log(createGalleryItemsMarkup(galleryItems))

galleries.insertAdjacentHTML("afterbegin",galleriItem);