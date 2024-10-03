// console.log('Inicio');
// new Promise( ( resolve, reject ) => {
//     /*
//     setTimeout( () => {
//         resolve('Mi amigo cumplio');
//     }, 1000);
//      */
//     reject('Mi amigo no cumplió');
// })
// .then( ( message ) => console.log(message) )
// .catch( ( errorMessage ) => console.log(errorMessage) )
// .finally( () => console.log('Fin de la promesa') );
// console.log('Fin');
import type { Hero } from '../data/heroes';
import { getHeroById } from "./07-imp-exp";

const getHeroByIdAsync = (id: number):Promise<Hero> => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            const hero = getHeroById( id );
            hero ? resolve(hero) : reject(`Heroe no encontrado #${ id }`);
        }, 1500);
    });
}

getHeroByIdAsync(100)
    .then( hero => console.log(`El nombre del heroe es ${ hero.name }`))
    .catch( error => console.log( error));