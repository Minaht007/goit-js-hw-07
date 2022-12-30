import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li>
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    </li>`
  )
  .join('');

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});