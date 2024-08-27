function toggleMenu() {
  const menu = document.querySelector('.menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
}

function adjustMenuDisplay() {
  const menu = document.querySelector('.menu');
  if (window.innerWidth > 768) {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
}

window.addEventListener('resize', adjustMenuDisplay);
adjustMenuDisplay();

window.addEventListener("load", function () {
  setTimeout(hideLoader, 1500);
});

window.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.overlay').style.display = 'block';
});

function hideLoader() {
  const loader = document.querySelector(".loader-wrapper");
  const overlay = document.querySelector(".overlay");

  loader.classList.add("hidden");
  overlay.classList.add("hidden");

  loader.addEventListener('animationend', () => {
    loader.remove();
    overlay.remove();
  });
}

$(".gallery").on("lightboxImageDisplayed.nanogallery2", function () {
  var description = $('.description').text(); // Get the description text
  $('#description-overlay').text(description).show(); // Display it in the overlay
});


// Event for closing the lightbox
$(".gallery").on("lightboxClosed.nanogallery2", function() {
  $('#description-overlay').hide(); // Hide overlay when lightbox is closed
});

// Optionally, handle closing the gallery or lightbox from outside
$(document).on('click', function(event) {
  if ($(event.target).closest('.nGY2Viewer').length === 0) {
    $('#description-overlay').hide(); // Hide overlay if clicking outside the lightbox
  }
});

$(document).on('keydown', function(event) {
  if (event.key === 'Escape') {
    $('#description-overlay').hide(); // Hide overlay when Esc key is pressed
  }
});

$(".gallery").on("galleryLayoutApplied.nanogallery2", function() {
  $('#description-overlay').hide(); // Hide overlay when lightbox is closed
});