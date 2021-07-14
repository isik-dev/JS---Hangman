const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch the puzzle");
      }
    })
    .then((data) => {
      return data.puzzle;
    });
};

const getCountry = (countryCode) =>
  new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();

    countryRequest.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find(
          (country) => country.alpha2Code === countryCode
        );
        resolve(country);
      } else if (e.target.readyState === 4) {
        reject("This is the error");
      }
    });

    countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
    countryRequest.send();
  });

// const getSquareIfEven = (callback) => {
//     data = [3, 4, 5, 6, 7]
//     data.forEach((number) => {
//         let result = []
//         if (number % 2 === 0) {
//             result.push(number*2)
//             callback(undefined, result)
//         } else {
//             callback(`The number was odd ${number}`, undefined)
//         }
//     })
// }
