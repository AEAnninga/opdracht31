import { superHeroes } from './superheroes.mjs';
// console.log(superHeroes);

// Opdracht 1: superhelden namen .map method:

const getSuperHeroNameMap = array => {
    const superHeroNames = superHero => {
        return superHero.name;
    }
    const newArray = array.map(superHeroNames);
    return newArray;
}
console.log(getSuperHeroNameMap(superHeroes));

const getSuperHeroNameForEach = array => { // .forEach method
    let newArray =[];
    array.forEach(superHero => {
        newArray.push(superHero.name);
    })
    return newArray;
}
console.log(getSuperHeroNameForEach(superHeroes));

// Opdracht 2 array namen van 'lichte'superhelden

const getLightWeightSuperHeroesNames = array => {
    const lightWeightHeroes = array.filter(superHero => superHero.weight < 190);
    // console.log('Alle superhelden onder 190: ', newArray);
    const lightWeightNames = [];
    lightWeightHeroes.forEach(superHero => {
        lightWeightNames.push(superHero.name);
    })
    return lightWeightNames;
}
console.log('Versie1:', getLightWeightSuperHeroesNames(superHeroes)); // Versie 1: ['Green Lantern','Wonder Woman', 'Blue Beetle', 'Spider Man']

// versie 2
const lightWeightSuperHeroes = superHeroes.filter(superHero => superHero.weight < 190);
const lightWeightSuperHeroesNames = []
lightWeightSuperHeroes.forEach(superHero => lightWeightSuperHeroesNames.push(superHero.name))
console.log('Versie 2:', lightWeightSuperHeroesNames);

// versie 3
const getLightWeightSuperHeroesNamesShort = array => {
    let getLightWeightSuperHeroesNames = [];
    array.filter(superHero => superHero.weight < 190).forEach(superHero => getLightWeightSuperHeroesNames.push(superHero.name))
    console.log('Versie 3:', getLightWeightSuperHeroesNames);
}
getLightWeightSuperHeroesNamesShort(superHeroes);

// opdracht 3 namen van superhelden die 200 pounds wegen

const get200PoundsSuperHeroes = array => {
    let get200PoundsSuperHeroesNames = [];
    array.filter(superHero => superHero.weight == 200).forEach(superHero => get200PoundsSuperHeroesNames.push(superHero.name))
    console.log('200 ponders:', get200PoundsSuperHeroesNames);
}
get200PoundsSuperHeroes(superHeroes);

// opdracht 4 alle comics met first appearances
const getComicsFirstAppearanceMap = array => {
    const comicsFirstAppearance = superHero => {
        return superHero.first_appearance;
    }
    const newArray = array.map(comicsFirstAppearance);
    return newArray;
}
console.log(getComicsFirstAppearanceMap(superHeroes));

// opdracht 5: 2 arrays alle superhelden: DC comics en Marvel
const getSuperHeroesDCComics = array => {
    let dcComics = [];
    array.filter(superHero => superHero.publisher === "DC Comics").forEach(superHero => {
        dcComics.push(superHero)
    })
    return dcComics;
}
console.log(getSuperHeroesDCComics(superHeroes));

const getSuperHeroesMarvelComics = array => {
    let MarvelComics = [];
    array.filter(superHero => superHero.publisher === "Marvel Comics").forEach(superHero => {
        MarvelComics.push(superHero)
    })
    return MarvelComics;
}
console.log(getSuperHeroesMarvelComics(superHeroes));

// opdracht 6 en 7

const combinedWeightDcComics = array => {
    let weightSuperHero = [];
    getSuperHeroesDCComics(array).forEach( superHero => weightSuperHero.push(superHero.weight))
    let combinedWeight = weightSuperHero.reduce((startWeight, currentWeight) => {
        if (currentWeight === NaN ){
            return parseInt(startWeight)
        } else {
            return parseInt(startWeight) + parseInt(currentWeight);
        }    
    })    
    console.log('Dit zijn de afzonderlijke gewichten:', weightSuperHero);
    return combinedWeight;
}
console.log('Dit is het gezamenlijke gewicht:', combinedWeightDcComics(superHeroes));

const combinedWeightMarvelComics = array => {
    let weightSuperHero = [];
    getSuperHeroesMarvelComics(array).forEach( superHero => weightSuperHero.push(superHero.weight))
    let combinedWeight = weightSuperHero.reduce((startWeight, currentWeight) => {
        if (currentWeight === 'unknown'){ // wanneer geen gewicht ('unknown') tel er 0 bij op
            return parseInt(startWeight) + 0;
        } else {
            return parseInt(startWeight) + parseInt(currentWeight); // wanneer wel gewicht, zet string om naar integer
        }    
    })    
    console.log('Dit zijn de afzonderlijke gewichten:', weightSuperHero);
    return combinedWeight;
}
console.log('Dit is het gezamenlijke gewicht:', combinedWeightMarvelComics(superHeroes));

// opdracht 8 Bonus Zoek de zwaarste superheld

const getHeaviestSuperHero = array => {
    let weightSuperHeroes = [];
    array.forEach(superHero => weightSuperHeroes.push(superHero.weight));
    console.log('Alle gewichten:', weightSuperHeroes);
    let heaviestWeight = weightSuperHeroes.reduce((startWeight, currentWeight) => {
        if (currentWeight === 'unknown') {
            return parseInt(startWeight) + 0;
        } else if (parseInt(startWeight) > parseInt(currentWeight)) {
            return parseInt(startWeight) + 0;
        } else { 
            return parseInt(currentWeight) + 0;
        }
    })
    console.log('Dit is het zwaarste gewicht:', heaviestWeight);
    let heaviestSuperHero = array.filter(superHero => parseInt(superHero.weight) === heaviestWeight);
    console.log('Dit is de zwaarste superhero:');
    return heaviestSuperHero[0];
}
console.log(getHeaviestSuperHero(superHeroes));
