const body = document.querySelector("body");
const imgNum = 5;

function imgLoad(num) {
  const image = document.createElement("img");
  image.src = `images/${num + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * imgNum);
  return number;
}

function init() {
  const randomNum = getRandom();
  imgLoad(randomNum);
}

init();
