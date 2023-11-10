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
    <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt= "${description}"
    />
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
  const instance = basicLightbox.create(
    `<img src=" ${event.target.dataset.source}" width="800" height="600" />`,
    {
      onShow: () => window.addEventListener("keydown", onEscPress),
      onClose: () => window.removeEventListener("keydown", onEscPress),
    }
  );
  instance.show();

  function onEscPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
console.log(galleryItems);
