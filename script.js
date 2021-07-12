const brandInput = document.getElementById("carBrand");
const priceInput = document.getElementById("carPrice");
const carKeyInput = document.getElementById("key");
const formButton = document.getElementById("formBtn");
const getKeyInput = document.getElementById("gettingKey");
const getButton = document.getElementById("getButton");
const gettingDiv = document.getElementById("getting");
const removeButton = document.getElementById("removeButton");
const removeKeyInput = document.getElementById("removeKey");
const clearButton = document.getElementById("clearButton");

// write function that take the key , brand and price for the car ,These values are then passed to the car object and stored in local storage

formButton.addEventListener("click", save);

function save(event) {
  event.preventDefault();

  const car = {
    brand: brandInput.value,
    price: priceInput.value,
  };
  localStorage.setItem(carKeyInput.value, JSON.stringify(car));
}
// wrie afunction that take the car key from user and then get the item value  from local storage whish have the key

getButton.addEventListener("click", function () {
  const car = localStorage.getItem(getKeyInput.value);
  gettingDiv.textContent = car;
});

//write function that delete a specific value from the local storage

removeButton.addEventListener("click", function () {
  console.log(removeKeyInput);
  localStorage.removeItem(removeKeyInput.value);
});

//writ function  to remove all values in the local storage.

clearButton.onclick = clear;

function clear() {
  localStorage.clear();
}
