//Checklist : 1
// Number.prototype.isPrime = () => { //change to arrow function it improved "This took 9.42110002040863 milliseconds to run"
// 	for (let i = 2; i < this; i++) {
// 		if (this % i === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// Checklist #2
// const {
// 	performance
// } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while (primeCount < 1e6) { //change the notation to 1e6
// 	// The 1,000,000 th prime number is 1,000,001
// 	// This took 117.03970003128052 milliseconds to run
// 	if (num.isPrime()) {
// 		primeCount++;
// 	}
// 	num++;
// }
// // console.log(`The 10,000th prime number is ${num - 1}`);
// console.log(`The 1,000,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// // Checklist #3
// recursive
// function rFib(n) {
// 	if (n < 2) {
// 		return n;
// 	}
// 	return rFib(n - 1) + rFib(n - 2);
// }
// rFib(20);
// // iterative
// function iFib(n) {
// 	const vals = [0, 1];
// 	while (vals.length - 1 < n) {
// 		let len = vals.length;
// 		vals.push(vals[len - 1] + vals[len - 2]);
// 	}
// 	return vals[n];
// }
// iFib(20);

//ITERATIVE is more faster than recursive

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(story);
console.log(reversed1);