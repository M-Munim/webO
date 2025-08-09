let myArr = ['munim', 8769879, true, undefined, null, 783489678, "alex", "ali", "shahwez"];


let orders = ["mobile", "handfree", "gaming controller"];
orders.push("laptop");
orders.unshift("keyboard");
console.log(orders.indexOf("gaming controller"))
console.log(orders.includes("handfree"))
console.log(orders.join("- "))
console.log(orders.slice(2, 5))

console.log(orders);
console.log(orders[2]); // gaming controller
console.log(myArr.length) // 9
console.log(myArr[myArr.length - 1]) // finding arrs last value 

let days = new Array("mon", "tue", "wed", "thu", "fri", "sat", "sun"); // creating array using new constructor keyword



//              0       1       2       3           4           5
let stds = ["munim", "shahwez", "ali", "sadia", "aatka", "mujahid"];

// console.log(stds.slice(2,6)); //ali, sadia

for (let i = 0; i < stds.length; i++) {
    console.log("hello " + stds[i]);
}

for (const std of stds) {
    console.log("hello " + std);
}


console.log('=====================')
let n = 10;

while (n < 20) {
    console.log(n);
    n++
}


let users = ["alex", "jhon", "alexa"];

for (const user of users) {
    console.log(user);
}


let cars = ["toyota", "honda", "bmw", "audi"];
for (const car of cars) {
    console.log(car);
}



let person = { name: "Munim", age: 55 };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
