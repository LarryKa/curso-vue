import heroes, { owners, type Owner } from "../data/heroes";

export const getHeroById = ( id: number ) => {
    return heroes.find( hero => hero.id === id );
}
// console.log(getHeroById(12));

export const getHerosByOwner = ( owner: Owner ) => {
    return heroes.filter( hero => hero.owner === owner ) ?? {};
}

// console.log(getHerosByOwner('Marvel'));