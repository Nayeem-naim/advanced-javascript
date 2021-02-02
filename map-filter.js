const number = [2, 5, 7, 3, 4, 8, 9,];
// const output = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);

// }
// map use kore( + - * /) kora jai ar output ba result array pao jai map ar vitore 3 ta parametar pass kora jai element index and  array 
// map ar filter array result dai ar a find number result dai 

// const square = element => element * element;
// const square = x => x * x;
// const result = number.map(function (element) {
//     return element * element;
// })



const result = number.map(x => x - 5);
// console.log(result);

// const bigger = number.filter(x => x > 5);
// const result = number.find(x => x > 5);
console.log(result);