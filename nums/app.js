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
  const triviaPromises = [];
  for (let num of nums) {
    triviaPromises.push(fetch(`${BASE_URL}/${num}?json`));
  }

  const raceResponse = await Promise.race(triviaPromises);
  const data = await raceResponse.json();
  console.log(`Winning number: ${data.number}`)
  console.log(`Fun fact: ${data.text}`);
}

// 3.

/** Show information (trivia/error messages) for all requests. */

async function showNumberAll(nums) {
  const promises = nums.map(num => fetch(`${BASE_URL}/${num}?json`));
  const resps = await Promise.allSettled(promises);

  console.log({ resps });

  const jFiltered = resps.filter(resp => {
    return resp.status === 'fulfilled' && resp.value.ok
  });
  const jPromises = jFiltered.map(resp => resp.value.json());
  const data = await Promise.all(jPromises);

  console.log({ data });

  for (const trivia of data) {
    console.log(trivia.text);
  }
}

/** Call all three functions one-after-another. */

async function main() {
  await showNumberTrivia(25);
  await showNumberRace([3, 6, 99, 30]);
  await showNumberAll([3, 'a', 6]);
}

await main();
