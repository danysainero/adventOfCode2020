import {
    myInput
} from './day4-input.js';

function parseInput(inputText) {
    return inputText.split("\n\n");
}

function resolve(input) {
    const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    let passports = [];
    input.forEach((passport) => {
      if (
        requiredFields.every((item) =>
          passport.includes(item)
        )
      ) {
        passports.push(passport);
      }
    });
    return passports.length;
}



const input = parseInput(myInput);
const output = resolve(input);

console.log(output);