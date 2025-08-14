import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItems = [
  {
    preview:
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&auto=format&fit=crop&q=60',
    original:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&auto=format&fit=crop&q=80',
    description: 'Dağlarda yol',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
    original:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80',
    description: 'Okyanus dalgaları',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60',
    original:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&auto=format&fit=crop&q=80',
    description: 'Sisli orman',
  },
];

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>`
    )
    .join('');
}

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

void lightbox; // avoid unused warnings in some bundlers
