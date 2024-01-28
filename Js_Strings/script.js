//strings
let str = "happi"
console.log(str.length);
console.log(str[0]);

//template literals -> a way to have embedded expressions in strings
let specialString = `this is also a string`;
console.log(specialString);

let obj={
    item: "pen",
    price : 10
}
let output = `the cost of ${obj.item} is ${obj.price} rupees`;  // string interpolation
console.log(output);