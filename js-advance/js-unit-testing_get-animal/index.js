export function getAnimal(animalPluralName) {
    if (animalPluralName === "cat"){
        return "I totaly Love Cats!";
    }
    if (animalPluralName === undefined){
        return "I do not like animals at all!";
    }
    return `I like ${animalPluralName}!`;

}
