var _ = require('lodash')

//Stack is one which Looks like this

//                  |     |
//                  |     |
//                  |     |
//                  |_____|

//Usage of stack to check weather is a pallindrome
//Array as stack
// let letters = [];

// var word = '121';
// var reverseWord = ''
// //Push into a stack

// for (let i = 0; i < word.length; i++) {
//     console.log(letters)
//     letters.push(word[i])
// }

// console.log(`===================================`)
// //Pop from stack and store it in reverseWord
// for (let i = 0; i < word.length; i++) {
//     reverseWord += letters.pop();
//     console.log(letters)
// }

// if (word === reverseWord) {
//     console.log(`${word} is a pallindrome`)
// }
// else console.log(`${word} is not a pallindrome`)


//Array as a stack
//Pallindrome or not

const stack = [];
const word = 'racecar';
var reverse = '';

//Pushing into the stack

for(let i=0;i<word.length; i++){
    stack.push(word[i]);
}

//Pop operation from stack

for(let i=0; i<word.length;i++){
    reverse += stack.pop();
}

const result = word === reverse ? `${word} is a pallindrome` : `${word} is not a pallindrome`;


console.log(result)

const results = word.split().reverse().filter((e)=> e);

console.log(results)

const obj1 = {};
const obj2 = {};
console.log(obj1 === obj2)
console.log(_.isEqual(obj1, obj2))

