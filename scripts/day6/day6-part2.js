import {
    myInput
} from './day6-input.js';

function parseInput(inputText) {
    return inputText;
}

function resolve(input) {
    const result = input
    .split('\n\n'
    ).map(group => {
        const people = group
            .split('\n');
        return [...people[0]].filter(e => people.every(p => p.includes(e))).length;
    })
    .reduce((a, b) => a + b); 
    
    return result
}




const input = parseInput(myInput);
const output = resolve(input);

console.log('solution', output);