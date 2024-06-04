#! /usr/bin/env node
import inquirer from "inquirer";


const answers: {sentence: String
} = await inquirer.prompt([
        {
          name: "sentence",
          type: "input",
          message:"Enter Your sentence to count the word: "  
        }
 ]);

const wordsCounter = answers.sentence.trim().split(" ");      

console.log(`${wordsCounter}`); 

console.log(`Your sentences word count is ${wordsCounter.length}`);


