const addToCartButtons = document.querySelectorAll("button");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Added to cart");
  });
});