/* class way
//class Animals
// export class Animal {
//     id: number;
//     name: string;
//     type: number; 

//     constructor(id: number, name: string, type: number) {
//         this.id = id;
//         this.name = name;
//         this.type = type;
//     }
// }

// // class childrent Bird
// export class Bird extends Animal{
//     wingSpan: number;
//     isFly: boolean; 

//     constructor(id: number, name: string, wingSpan: number, isFly: boolean) {
//         super(id, name, 0) //bird
//         this.wingSpan = wingSpan;
//         this.isFly = isFly;
//     }
// }

// // class childrent Bird
// export class Dog extends Animal{
//     isTrained?: boolean; 

//     constructor(id: number, name: string, isTrained?: boolean) {
//         super(id, name, 1) //Dog
//         this.isTrained = isTrained;
//     }
// }

// List of animals
// export const animals: Animal[] = [
//     new Bird(1, 'Sparrow', 25, true),
//     new Bird(2, 'Eagle', 200, true),
//     new Bird(3, 'Parrot', 30, true),
//     new Bird(4, 'Penguin', 60, false),
//     new Bird(5, 'Owl', 150, true),
//     new Dog(6, 'Bulldog', true),
//     new Dog(7, 'Beagle', false),
//     new Dog(8, 'Labrador', true),
//     new Dog(9, 'Poodle'),
//     new Dog(10, 'German Shepherd', true),
// ];
*/

//When using a model, need to use export
//When using inherit interface (nhanh mo rong, ko su dung cho array), remaining using define type 

//Interface Animal
export interface Animal {
    id: number;
    name: string;
    type: number;
}

//interface Bird
export interface Bird extends Animal {
    wingSpan: number;
    isFly: boolean;
};

//interface Dog
export interface Dog extends Animal {
    isTrained?: boolean;
}; 

//interface tags
export type Tags = {
    [key: string]: string | number | boolean;
};

//
export type FinalAnimal = Animal & {
    tags?: Tags;
    children?: Child[];
    isTrained?: boolean;
}

//&: extends from Animal, does not belong to the original Animal type, ?: No need to provide a value for the tag, resuls: undefined
export interface Child extends Animal { 
    isTrained?: boolean;
}

//Gets an object of type Animal and returns the object's name
export function getAnimalName(animal: Animal):string {
    return animal.name
}

//Gets an object of type Animal and returns the object's type
export function getAnimalType(animal: Animal):number {
    return animal.type
}

// List of animals
export const animals: (Bird | Dog)[] = [
    { id: 1, name: 'Sparrow', type: 0, wingSpan: 25, isFly: true },
    { id: 2, name: 'Eagle', type: 0, wingSpan: 200, isFly: true },
    { id: 3, name: 'Parrot', type: 0, wingSpan: 30, isFly: true },
    { id: 4, name: 'Penguin', type: 0, wingSpan: 60, isFly: false },
    { id: 5, name: 'Owl', type: 0, wingSpan: 150, isFly: true },
    { id: 6, name: 'Bulldog', type: 1, isTrained: true },
    { id: 7, name: 'Beagle', type: 1, isTrained: false },
    { id: 8, name: 'Labrador', type: 1, isTrained: true },
    { id: 9, name: 'Poodle', type: 1 },
    { id: 10, name: 'German Shepherd', type: 1, isTrained: true },
];

// List of finalAnimals
export const finalAnimals: FinalAnimal[] = [
    {
        id: 10,
        name: 'German Shepherd',
        type: 1, 
        isTrained: true,
        tags: {
            test1: 'test1',
            test2: 2,
            test3: false,
        },
        children: [
            {
                id: 11,
                name: 'German Shepherd1',
                type: 1,
            },
            {
                id: 12,
                name: 'German Shepherd1',
                type: 1,
                isTrained: true,
            },
        ],
    },
];