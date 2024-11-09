// selecting the image
const featuredImage = document.querySelector('#gallery figure img');
const caption = document.querySelector('#gallery figure figcaption');

// it will select the thumbnail image of the ui
const thumbnails = document.querySelectorAll('#gallery ul li img');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        featuredImage.src = thumbnail.src.replace('-small', '-large'); // replace small image with large
        featuredImage.alt = thumbnail.alt;

        // Update the figcaption text to match the new image 
        caption.textContent = thumbnail.alt || 'Pink Flower' || 'Purple flower' || 'Red Flower' || 'White Flower' || 'Yellow Flower';

        // Optional: Add active styling by removing inactive class from selected thumbnail
        updateActiveThumbnail(thumbnail);
    });
});

// Optional: Add grayscale filter to inactive thumbnails
function updateActiveThumbnail(activeThumb) {
    thumbnails.forEach((thumb) => thumb.classList.add('inactive'));
    activeThumb.classList.remove('inactive');
}
