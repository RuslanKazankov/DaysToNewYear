let nextYear = new Date().getFullYear() + 1;
let newYear = new Date(nextYear, 0, 1);

let diffInMilliseconds = newYear - new Date();

let diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

console.log(diffInDays);