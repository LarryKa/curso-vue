// function greetPerson( name:string ){
//     return `Hola ${name}`;
// }

const greetPerson = (name:string):string => `Hola ${name}`;

const getUser = (uid:string) => ({ uid, username:'Tony001'});

const actresses = [
    {
        id: 1,
        name: "Megan Fox",
    },
    {
        id: 2,
        name: "Sydney Sweeney",
        blonde: true
    },
];

const actress = actresses.find( (a) => a.id === 2);
console.log( actress?.name.toUpperCase() );