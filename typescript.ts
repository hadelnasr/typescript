// const sum = (a: number, b: number) => {
//     return a + b;
// };
//
// console.log(sum(1,2));

// types
let isCool: boolean = true;
let age: number = 56;
let eyeColor: string = "brown";
let favouriteQuote : string = `I'm not old, i'm only ${age}`;
let pets: string[] = ['cat', 'dog'];
let pets2 : Array<string> = ['lion', 'dragon'];
let wizard: object = {
    a: 'john'
};
let meh: undefined = undefined;
let moo: null = null;

// extra types
let basket: [string, number];
basket = ['basketball', 5];

enum Size {Small = 1, Medium = 2, Large = 3}
let sizeName: number = Size.Small;

let whatever: any = 'asgasdasd';
whatever = 5;
whatever = true;

// doesn't return anything
let sing = (): void => {
    console.log("hello");
};

// functions doesn't have endpoint, and no return
let error = (): never => {
    throw Error('oops');
};
