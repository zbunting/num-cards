const BASE_URL = "https://pokeapi.co/api/v2";


// 1.

async function part1() {
}

await part1();


// 2.

async function part2() {
}

await part2();


// 3.

async function part3() {
}

await part3();


// 4.

const $btn = document.querySelector("button");
const $pokeArea = document.querySelector("#pokemon-area");

async function handleButtonClick() {
}

$btn.addEventListener("click", handleButtonClick);

function makePokeCard(name, imgSrc, description) {
  return `
      <div class="card">
        <h1>${name}</h1>
        <img src=${imgSrc} alt="${name}" />
        <p>${description}</p>
      </div>
    `;
}
