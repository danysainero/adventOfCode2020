import {
    myInput
} from './day7-input.js';


function parseInput(inputText) {
    return inputText.split('\n');
}

function resolve(input) {
    const map = new Map();

    input.forEach(line => {
        const parts = line.split('contain ');

        if (!line.includes('no other')) {
            const from = parts[0].split(' bag')[0];
            const to = parts[1].split(', ').map(part => part.split(' bag')[0]);

            for (const bag of to) {
                if (!map.has(from)) {
                    map.set(from, []);
                }

                map.get(from).push(bag);
            }
        }
    });

    function calculateBags(count, bag) {
        let res = 0;

        const getBag = map.get(bag);

        res += count;

        if (!getBag) {
            return res;
        }

        for (const to of map.get(bag)) {
            const parts = to.split(' ');
            const num = Number(parts[0]);
            const item = parts.slice(1).join(' ');

            res += calculateBags(count * num, item);
        }

        return res;
    }

    return calculateBags(1, 'shiny gold') - 1;
}


const input = parseInput(myInput);
const output = resolve(input);
console.log('solution', output);