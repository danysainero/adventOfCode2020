import {
    myInput
} from './day5-input.js';

function parseInput(inputText) {
    return inputText.split("\n");
}

function resolve(rows) {
    let seat = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    
    for (let i = 0; i < rows.length; i++) {

        let size = {
            bottom: 0,
            top: 127,
            left: 0,
            right: 7
        };

        for (let j = 0; j < 7; j++) {
            const half = (size.bottom + size.top) >> 1;
            if (rows[i][j] == "F") {
                size.top = half;
            } else {
                size.bottom = half + 1;
            }
        }

        for (let k = 7; k < 10; k++) {
            const half = (size.left + size.right) >> 1;
            if (rows[i][k] == "L") {
                size.right = half;
            } else {
                size.left = half + 1;
            }
        }

        seat = (size.bottom * 8) + size.left;

        min = Math.min(min, seat);
        max = Math.max(max, seat);
        sum = sum + seat;
    }

    return (((max * (max + 1)) / 2) - ((min * (min - 1)) / 2)) - sum;
}


const input = parseInput(myInput);
const output = resolve(input);

console.log('solution', output);