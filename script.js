const gallery = document.getElementById('gallery');

// Array of image URLs
//.
const images = [
  'https://picsum.photos/id/1/500/500',
  'https://picsum.photos/id/2/500/500',
  'https://picsum.photos/id/3/500/500',
  'https://picsum.photos/id/4/500/500',
  'https://picsum.photos/id/5/500/500',
  'https://picsum.photos/id/6/500/500',
  'https://picsum.photos/id/7/500/500',
  'https://picsum.photos/id/8/500/500',
  'https://picsum.photos/id/9/500/500',
  'https://picsum.photos/id/10/500/500'
];

// Loop through the images array and create an img element for each image
for (let i = 0; i < images.length; i++) {
  const img = document.createElement('img');
  img.src = images[i];
  gallery.appendChild(img);
}