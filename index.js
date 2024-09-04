"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-check
require("process");
var readline_1 = require("readline");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
console.log("Találd ki a számot\n");
var guessedNum = Math.floor(Math.random() * 99) + 1;
rl.on('line', function (line) {
    try {
        var guess = parseInt(line);
        if (guessedNum == guess) {
            console.log("Eltaláltad");
            rl.close();
        }
        guessedNum > guess ? console.log("A gondolt szám nagyobb") : guessedNum < guess ? console.log("A gondolt szám kisebb") : null;
    }
    catch (error) {
        console.error("Something went wrong: ".concat(error));
        process.exit(-1);
    }
});
rl.once('close', function () {
    process.exit(0);
});
