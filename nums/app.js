const BASE_URL = "http://numbersapi.com";

// 1.
// make request to Numbers API
// get back JSON


async function showNumberTrivia(num) {
  const resp = await fetch(`${BASE_URL}/${num}?json`);
  const data = await resp.json();

  console.log('Favorite number is: ', num);
  console.log(data.text);
}

// 2.

/** Show "winning" trivia: the first of FAV_NUMBERS to return. */

async function showNumberRace(nums) {
}

// 3.

/** Show information (trivia/error messages) for all requests. */

async function showNumberAll(nums) {
}

/** Call all three functions one-after-another. */

async function main() {
  await showNumberTrivia(25);
}

await main();
