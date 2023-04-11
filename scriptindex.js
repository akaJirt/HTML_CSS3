

const imageButton = document.getElementById("imageButton");

imageButton.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
});

document.addEventListener("dragover", (event) => {
  event.preventDefault();
});

document.addEventListener("drop", (event) => {
  event.preventDefault();
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
});

