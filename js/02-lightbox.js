import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handleClick);
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}
function handleClick(event) {
  event.preventDefault();
  if (event.target.nodeName != "IMG") {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
console.log(galleryItems);
