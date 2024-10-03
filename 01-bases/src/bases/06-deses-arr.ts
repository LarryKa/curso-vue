const characters = ['Goku', 'Vegeta', 'Trunks', 'Broly'];

const [g, v, t, b, g3 = 'Yamoshi'] = characters;

console.log({t, g3});

const returnArray = () => {
    return [123, 'ABC'] as const;
}

const [numbers, letters] = returnArray();

console.log(numbers, letters.toLowerCase());