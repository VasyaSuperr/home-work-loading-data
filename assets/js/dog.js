class Dog {
  constructor(message, status) {
    this.message = message;
    this.status = status;
  }

  fetchDogImage() {
    fetch(RANDOM_IMG_DOG)
      .then((response) => response.json())
      .then((data) => updateImgDog(data))
      .catch((error) => console.log("The problem is in", error));
  }

  updateImgDog(data) {
    const { message } = data;
    dogImageEl.src = message;
  }
}
