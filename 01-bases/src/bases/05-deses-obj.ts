interface Actress {
    name: string;
    age: number;
    codeName: string;
    blonde?: boolean;
}
export const person:Actress = {
    name: 'Sydney',
    age: 28,
    codeName: 'Sweeney',
    blonde: true
};

// const { age, name, codeName, blonde = 'No es rubia' } = person;

// console.log(name);
// console.log(age);
// console.log(codeName);
// console.log(blonde);

const createActress = ( {name, age, codeName, blonde}:Actress ) => ({
    id: 1234, 
    name: name,
    age: age,
    codeName: codeName,
    blonde: blonde ?? false
});


console.log(createActress(person));
