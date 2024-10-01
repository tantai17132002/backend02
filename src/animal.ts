//When using a model, need to use export

//Define type Bird
export type Bird = {
    id: number;
    name: string;
    type: 0; //bird
    wingSpan: number;
    isFly: boolean;
};

//Define type Dog
export type Dog = {
    id: number;
    name: string;
    type: 1; //dog
    isTrained?: boolean;
};

//Animal configuration
export type Animal = Bird | Dog;

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
            },
            {
                id: 12,
                name: 'German Shepherd1',
                isTrained: true,
            },
        ],
    },
];