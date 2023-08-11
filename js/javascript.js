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