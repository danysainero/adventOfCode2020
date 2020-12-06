import {
  myInput
} from './day6-input.js';

const test = `abc

a
b
c

ab
ac

a
a
a
a

b`;

function parseInput(inputText) {
  return  inputText.trim().split(/\n\n/).map((group) =>  [...new Set(group.replace(/\n/g, ""))].length);
}

function resolve(input) {
  return input.reduce((total, positives) => total + positives);
}


const input = parseInput(myInput);

console.assert(resolve(parseInput(test) ) === 11, 'resolve(test)');

const output = resolve(input);

console.log('solution', output);