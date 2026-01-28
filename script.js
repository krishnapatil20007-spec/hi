window.onload = function() {
  console.log("Page loaded!");
  addTabIndex(); // We'll define this function next
  loadRandomImages(); // Load random images on page load
};

function highlight(event) {
  event.target.style.border = "3px solid blue";
}

function removeHighlight(event) {
  event.target.style.border = "";
}

// Add focus/blur handling
function tabFocus(event) {
  console.log("Image focused: " + event.target.alt);
  event.target.style.outline = "2px dashed red";
}

function tabBlur(event) {
  console.log("Image lost focus: " + event.target.alt);
  event.target.style.outline = "";
}

// Loop through each image
let images = document.querySelectorAll("#gallery img");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", highlight);
  images[i].addEventListener("mouseleave", removeHighlight);
  images[i].addEventListener("focus", tabFocus);
  images[i].addEventListener("blur", tabBlur);
}
function addTabIndex() {
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0"); // 0 = keyboard focusable
  }
}

// Load random images into the gallery
function loadRandomImages() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; // Clear existing images
  
  // Generate 8 random images
  for (let i = 0; i < 8; i++) {
    const randomId = Math.floor(Math.random() * 10000);
    const img = document.createElement('img');
    img.src = `https://picsum.photos/150?random=${randomId}`;
    img.alt = `Random image ${i + 1}`;
    gallery.appendChild(img);
  }
}
