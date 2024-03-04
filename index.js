// EXAMPLE 1 - Convert a Set to a String in JavaScript

const set1 = new Set(['a', 'b', 'c']);

// 👇️ "a b c"
const str1 = Array.from(set1).join(' ');
console.log(str1);

// 👇️ "a,b,c"
const str2 = Array.from(set1).join(',');
console.log(str2);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert a Set to a String without a separator

// const set1 = new Set(['a', 'b', 'c']);

// const str = Array.from(set1).join('');

// console.log(str); // 👉️ "abc"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert a Set to a String using the spread syntax (...)

// const set1 = new Set(['a', 'b', 'c']);

// // 👇️ "a b c"
// const str1 = [...set1].join(' ');
// console.log(str1);

// // 👇️ "a,b,c"
// const str2 = [...set1].join(',');
// console.log(str2);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert a Set to a String using `set.forEach()`

// function setToString(set) {
//   let str = '';

//   set.forEach(element => {
//     str += element;
//   });

//   return str;
// }

// const set1 = new Set(['a', 'b', 'c']);

// const result = setToString(set1);
// console.log(result); // 👉️ abc

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using `set.forEach()` with a separator

// function setToString(set, separator = '') {
//   let str = '';

//   set.forEach(element => {
//     str += element + separator;
//   });

//   return str.slice(0, -1);
// }

// const set1 = new Set(['a', 'b', 'c']);

// const result = setToString(set1, '-');
// console.log(result); // 👉️ a-b-c
