const countryList = {
  AFD: 'AE',
  AFN: 'AF',
  XCD: 'AG',
  ALL: 'AL',
  AMD: 'AM',
  USD: 'US',
  INR: 'IN',
  EUR: 'ER',
  AUD: 'AU',
  BBD: 'BB',
};

// const BASE_URL =
//   'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/';

// const dropdowns = document.querySelectorAll('.dropdown select');
// const btn = document.querySelector('form button');
// const fromCurr = document.querySelector('.from select ');
// const toCurr = document.querySelector('.to select ');

// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement('option');
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === 'from' && currCode == 'USD') {
//       newOption.selected === 'To' && currCode === 'INR';
//       newOption.selected = 'selected';
//     }

//     select.append(newOption);
//   }
//   select.addEventListener('change', (evt) => {
//     updateFlags(evt.target);
//   });
// }

// const updateFlags = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector('img');
//   img.src = newSrc;
// };
// btn.addEventListener('click', async (evt) => {
//   evt.preventDefault();
//   let amount = document.querySelector('.amount input');
//   let amtval = amount.value;
//   if (amtval === '' || amtval < 1) {
//     amtval = 1;
//     amount.value = '1';
//   }

//   // console.log(fromCurr.value, toCurr.value);
//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
// });
