// console.log(hello);
// var hello = 'world'; //undefined //predict correct

// var needle = 'haystack';
// test(); //function must declared first .. undefined .  

// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }


// var brendan = 'super cool';

// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// print(); //only okay
// console.log(brendan); //super cool   predicted wrong: only okay correct output


// // var food = 'chicken';
// // console.log(food); // chicken
// // // eat();

// // // function eat() {
// // //     food = 'half-chicken';
// // //     console.log(food); //half chicken
// // //     var food = 'gone';
// // // }


// // mean(); // Type Error 
// // console.log(food);
// // var mean = function () {
// //     food = "chicken";
// //     console.log(food);
// //     var food = "fish";
// //     console.log(food);
// // }
// // console.log(food); 

// // console.log(genre); // undefined
// // var genre = "disco";
// // rewind();

// // function rewind() {
// //     genre = "rock";
// //     console.log(genre); //rock
// //     var genre = "r&b";
// //     console.log(genre); //r&b
// // }
// // console.log(genre); //disco

// // dojo = "san jose";
// // console.log(dojo); //san jose
// // learn();

// // function learn() {
// //     console.log(dojo); //san jose
// //     dojo = "seattle";
// //     console.log(dojo); //seattle
// //     var dojo = "burbank";
// //     console.log(dojo); //burbank
// // }
// // console.log(dojo); //san jose

// // correct: san jose
// // undefined
// // seattle
// // burbank
// // san jose

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     } else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }
//     name: 'Chicago',
//     students: 65,
//     hiring: true
// } {
//     name: 'Berkeley',
//     students: 0
// }

// output: TypeError missing equal sign to else if