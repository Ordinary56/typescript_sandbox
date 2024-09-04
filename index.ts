"use strict";
//@ts-check
import "process"
import { createInterface } from "readline";
const rl = createInterface(
    {
        input : process.stdin,
        output: process.stdout,
        terminal: false
    }
);
console.log("Találd ki a számot\n");
const guessedNum: number = Math.floor(Math.random() * 99) + 1;
rl.on('line', (line) => {
    try {
        const guess: number = parseInt(line);
        if(guessedNum == guess) {
            console.log("Eltaláltad");
            rl.close();
        }
        guessedNum > guess ? console.log("A gondolt szám nagyobb") : guessedNum < guess ? console.log("A gondolt szám kisebb") : null;


    }
    catch(error) {
        console.error(`Something went wrong: ${error}`);
        process.exit(-1);
    }
})

rl.once('close', () => {
    console.log(`A gondolt szám: ${guessedNum}`);
    process.exit(0);
});