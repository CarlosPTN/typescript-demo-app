
let userName: string;
let userAge = 38;
// ...

userName = 'Carlos';

function add(a: number, b=5): number {
    return a+b;
}

add(10);
add('10');
add(10,6);
