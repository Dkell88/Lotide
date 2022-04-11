const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const numbers = [1,2,3,4,5,6];
const values = ["june", 6, "fish", 88];
const blank = [];
assertEqual(words.length, 3);
assertEqual(tail(words).join(), "Lighthouse,Labs");
assertEqual(tail(numbers).join(), "2,3,4,5,6");
assertEqual(tail(values).join(), "6,fish,88");
assertEqual(tail(blank).join(), "");
assertEqual(tail(blank).join(), "");