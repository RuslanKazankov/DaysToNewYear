const nextYear = new Date().getFullYear() + 1;
const newYear = new Date(nextYear, 0, 1);

const diffInMilliseconds = newYear - new Date();

const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

console.log(diffInDays);