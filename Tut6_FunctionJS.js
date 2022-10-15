console.log("This is a Function Call Methods");

function greet(name1, greetText){
    console.log(greetText + " " + name1);
    console.log(name1 + " is a good boy");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("Function is returned");
}

let name1 = "Rahul";
let name2 = "Shubham";
let name3 = "Rohan";
let name4 = "Sagar";
let greetText="good morning";

greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);

let returnVal = sum(1,2,3);
console.log(returnVal);

// console.log(name1 + "is a good boy");
// console.log(name2 + "is a good boy");
// console.log(name3 + "is a good boy");
// console.log(name4 + "is a good boy");