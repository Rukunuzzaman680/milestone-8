const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
};
const displayCountries = countries => {
  console.log(countries);
  const countriesHTML = countries.map(country => getCountryHTML(country));
  // console.log(countriesHTML[0]);
  const container = document.getElementById('countries');
  container.innerHTML = countriesHTML.join(' ');
};

// original
// const getCountryHTML = country => {
//   return `
//   <div class="country">
//   <h1>${country.name.common}</h1>
//   <h2>${country.name.official}</h2>
//   <img src="${country.flags.png}">
//   </div>
//   `;
// };

// option: 1
// const getCountryHTML = country => {
//   const { name, flags } = country;
//   return `
//   <div class="country">
//   <h1>${name.common}</h1>
//   <h2>${name.official}</h2>
//   <img src="${flags.png}">
//   </div>
//   `;
// };

const getCountryHTML = ({ name, flags, area, region }) => {
  return `
  <div class="country">
  <h1>${name.common}</h1>
  <h2>${name.official}</h2>
  <h3>Area: ${area}</h3>
  <h3>Region: ${region}</h3>
  <img src="${flags.png}">
  </div>
  `;
};

loadCountries();
