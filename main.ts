//import file = alias
import {getAnimalName, getAnimalType, animals ,finalAnimals } from 'src/animal'; 

//Get animal names & types from the animals list
animals.forEach(animal => {
    console.log("Animal's Name: " + `${getAnimalName(animal)}`+ ", Animal's Type:", `${getAnimalType(animal)}`);
});


//// prints the names of finalAnimals
finalAnimals.forEach(finalAnimal => {
    console.log("Final Animal's name:", getAnimalName(finalAnimal));
    if (finalAnimal.children) {
        finalAnimal.children.forEach(child => {
            console.log("Child Animal's Name:", child.name);
        });
    }
});