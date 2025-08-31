let index = 0;
const images = document.querySelectorAll("#slider img");
const dots = document.querySelectorAll(".dot");

function showImage(i) {
  images.forEach((img, idx) => {
    img.classList.toggle("active", idx === i);
    dots[idx].classList.toggle("active-dot", idx === i);
  });
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

function next() {
  index = (index + 1) % images.length;
  showImage(index);
}

// Auto-slide every 3 seconds
setInterval(next, 3000);

// Dots click event
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showImage(index);
  });
});