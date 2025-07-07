let hobbies = ['Sports','Cooking'];


//hobbies.push(10);

//let users: (string | number)[]; 
//this is the way of typing that is an array of string or numbers values 
//OR this is a generic type a feature from types’’cript

let possibleResults: [number, number]; //tuple of exactly two values 

possibleResults = [1,-1];
//possibleResults = [5, 10, 12];

let user: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Max',
    age: 38,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: 'admin',
        id: 5
    }
}