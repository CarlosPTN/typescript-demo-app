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
let val: {}= 'some text'; // using as a type this doesnt mean it 
// is an object it means it cant be null, any non null value 
// (not "null" or "undefined");
const someObj = {}; //this is a value

//Record type is provided by typescript, it lets as dinamically in 
// case we dont know what are the property names for example this way 
// it is possible to type them (both the keys and values)
let data : Record<string, number | string>;
//the keys are in fact strings
data= {
    entry1: 1,
    1: 'some string'
};