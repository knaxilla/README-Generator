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
    },
    {
        type: "input",
        name: "installation",
        message: "What did you install for your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license did you use for your project",
        choices: ["MIT", "APACHE 2.0"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who/What contributed to your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Tests?"
    },
    {
        type: "input",
        name: "email",
        message: "please enter a valid email that they can conctact you at: "
    },
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
            fs.writeFileSync("./output/README.md", template, () => {
                console.log("README created!")
            })
        })

}

// Function call to initialize app
init();
