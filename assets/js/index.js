"use strict";

const RANDOM_IMG_DOG = "https://dog.ceo/api/breeds/image/random";

const wrapperDogCardEl = document.querySelector(".wrapperDogCard");
const dogImageEl = document.querySelector(".dogImage");
const breedDogEl = document.querySelector(".breedDog");
const changeBtnEl = document.querySelector(".changeBtn");

function fetchDogImage() {
  fetch(RANDOM_IMG_DOG)
    .then((response) => response.json())
    .then((data) => updateImgDog(data))
    .catch((error) => console.log("The problem is in", error));
}

function updateImgDog(data) {
  const { message } = data;
  dogImageEl.src = message;

  const breed = message.split("/")[4];

  breedDogEl.textContent = `${breed}`;
}

dogImageEl.addEventListener("click", fetchDogImage);
changeBtnEl.addEventListener("click", fetchDogImage);

fetchDogImage();
