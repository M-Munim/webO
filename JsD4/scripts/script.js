// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Other day");
//         break;
// }

// ====================================================

// let age = 28;

// if (age > 23) {
//     console.log("You can drive");
// } else {
//     console.log("You can't drive");
// }

//  age > 23 ? console.log("You can drive") : console.log("You can't drive");

// ====================================================

//  let userName = "Munim";
//  let pass = "1234"

//  if (userName === "Munim" && pass === "1234") {
//     console.log("Login Success");
//  } else {
//     console.log("Login Failed");

//  }

// ====================================================
// function declaration

greet("Munim") // argument ()
greet("Shahwez")
greet("sadia")
greet("aatka")
function greet(name) {  //parameter (input value)
    console.log("Hello " + name);
}

// function expression

const hi = function name(naam) {
    console.log("kesy ho " + naam);
}
hi("Munim")
hi("Shahwez")
hi("sadia")
hi("aatka")



const add = (a, b) => {
    return console.log(a + b)
    console.log("hello bhai")
}

// can be also written as
// const add = (a, b) => console.log(a + b)

add(10, 20)
add(30, 40)

// ====================================================

setTimeout(function () {
    console.log("Hello");
}, 3000); //3000 ms == 3 seconds


// ====================================================

(function abc() {
    console.log("Hello");
})()
