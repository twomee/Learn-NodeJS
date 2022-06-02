//revrese array with lodash module
const _ = require('lodash');
let array = [1, 2, 3];
_.reverse(array);
console.log(array); // [3, 2, 1]

//print text with color with chalk module
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));