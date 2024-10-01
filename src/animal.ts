//When using a model, need to use export

//class Animals
export class Animal {
    id: number;
    name: string;
    type: number; 

    constructor(id: number, name: string, type: number) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}

// class childrent Bird
export class Bird extends Animal{
    wingSpan: number;
    isFly: boolean; 

    constructor(id: number, name: string, wingSpan: number, isFly: boolean) {
        super(id, name, 0) //bird
        this.wingSpan = wingSpan;
        this.isFly = isFly;
    }
}

// class childrent Bird
export class Dog extends Animal{
    isTrained?: boolean; 

    constructor(id: number, name: string, isTrained?: boolean) {
        super(id, name, 1) //Dog
        this.isTrained = isTrained;
    }
}

// export type Bird = {
//     id: number;
//     name: string;
//     type: 0; //bird
//     wingSpan: number;
//     isFly: boolean;
// };

// export type Dog = {
//     id: number;
//     name: string;
//     type: 1; //dog
//     isTrained?: boolean;
// }; 

// export type Animal = Bird | Dog;

//&Animal: extends from Animal, does not belong to the original Animal type, ?: No need to provide a value for the tag, resuls: undefined
export type FinalAnimal = Animal & { 
    tags?: {
        test1?: string;
        test2?: number;
        test3?: boolean;
    };
    children?: {
        id: number;
        name: string;
        isTrained?: boolean;
    }[];
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
export const animals: Animal[] = [
    new Bird(1, 'Sparrow', 25, true),
    new Bird(2, 'Eagle', 200, true),
    new Bird(3, 'Parrot', 30, true),
    new Bird(4, 'Penguin', 60, false),
    new Bird(5, 'Owl', 150, true),
    new Dog(6, 'Bulldog', true),
    new Dog(7, 'Beagle', false),
    new Dog(8, 'Labrador', true),
    new Dog(9, 'Poodle'),
    new Dog(10, 'German Shepherd', true),
];

// List of finalAnimals
export const finalAnimals: FinalAnimal[] = [
    {
        id: 10,
        name: 'German Shepherd',
        type: 1,
        tags: {
            test1: 'test1',
            test2: 2,
            test3: false,
        },
        children: [
            {
                id: 11,
                name: 'German Shepherd1',
            },
            {
                id: 12,
                name: 'German Shepherd1',
                isTrained: true,
            },
        ],
    },
];