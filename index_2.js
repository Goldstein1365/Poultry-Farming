let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//  nav bar function
const toggle = document.querySelector(".bar");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// start now function
function openForm() {
  document.getElementById("openChat").style.display = "block";
}
function closeForm() {
  document.getElementById("openChat").style.display = "none";
}
