// ////////// Array

// // 1- JS
// var intro = ["omnia", "alex" , "computer science"];
// var name = intro[0];
// var city = intro[1];
// var education = intro[2];
// console.log(name);//"omnia"
// console.log(city);//"alex"
// console.log(education);//"computer science"

// // es6
// var intro = ["omnia", "alex" , "computer science"];
// var [name, city, education] = intro;
// console.log(name);//"omnia"
// console.log(city);//"alex"
// console.log(education);//"computer science"


// // 2- skipping items in an array
// var intro = ["omnia", "alex" , "computer science"];
// var [name, , education] = intro;
// console.log(name);//"omnia"
// console.log(education);//"computer science"


// // 3- assigning the rest of an array
// var intro = ["omnia", "alex" , "computer science", "science"];
// var [name,,education,...others] = intro;
// console.log(name);//"omnia"
// console.log(others);//["science"]


// // 4- using default values
// var intro = ["omnia", "computer science"];
// var [name, city="alex", education="CS"] = intro;
// console.log(city);//"alex"
// console.log(education);//"computer science"

// // 5- swapping values using destructuring assignment
// var one = 2;
// var two = 1;

// //js
// var x = one; // 2
// one = two; // 1
// two = x; // 2

// //es6
// [one, two]= [two, one]


// ////////////////////// object

// // 1- JS
// var intro = {name:"omnia", city:"alex" ,education: "computer science"};
// var name = intro.name;
// var city = intro.city;
// console.log(name);//"omnia"
// console.log(city);//"alex"

// // es6
// var intro = {name:"omnia", city:"alex" ,education: "computer science"};
// var {name, education, city} = intro;
// console.log(name);//"omnia"
// console.log(city);//"alex"
// console.log(education);//"computer science"

// // using a new variable name
// var intro = {name:"omnia", city:"alex" ,education: "computer science"};
// var {name: x, city: y} = intro;
// console.log(x);//"omnia"
// console.log(y);//"alex"


// // 2- using default values
// var intro = {name:"omnia", city:"alex" ,education: "computer science"};
// var {name, city="cairo", education : y ="CS"} = intro;
// console.log(city);//"alex"
// console.log(y);//"computer science"


// // 3- variables declared before being assigned
// var intro = {name:"omnia", city:"alex" ,education: "computer science"};
// var name, city, education;
// {name, city, education} = intro;


// // 4- Combining Arrays with Objects

// var intro = {
//   name: "omnia",
//   skills: {
//     UX: "xd",
//     frontEnd: "react" },
//   education : ["computer science", "math"]
// };

// var { name: a, skills: { UX : b, frontEnd : c}, education: [cs] } = intro;

// console.log(b);// "xd"
// console.log(cs);// "computer science"

