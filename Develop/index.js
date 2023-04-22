// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);


            const template = generateMarkdown(answers)

            console.log(template)

            // write into a file
            fs.writeFile("./output/README.md", template, () => {
                console.log("README created!")
            })
        })

}

// Function call to initialize app
init();
