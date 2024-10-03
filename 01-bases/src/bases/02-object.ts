const person = {
    lastName: 'Widow',
    age: 30,
    address: {
        city: 'New York',
        zip: 51323,
        lat: 14.23232,
        lng: 34.5667
    }
}; // as const;

// const person2 = {...person};
const person2 = structuredClone(person);
person2.lastName = 'Sweeney';
person2.address.city = 'LA';

console.log(person);
console.log(person2);
