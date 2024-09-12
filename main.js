// Get the slideshow images
const slideshowImages = document.querySelectorAll('.slideshow-image');

// Set the current image index
let currentImageIndex = 0;

// Function to show the next image
function showNextImage() {
  // Hide the current image
  slideshowImages[currentImageIndex].style.opacity = 0;

  // Move to the next image
  currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;

  // Show the next image
  slideshowImages[currentImageIndex].style.opacity = 1;
}

// Set the interval to show the next image every 5 seconds
setInterval(showNextImage, 5000);