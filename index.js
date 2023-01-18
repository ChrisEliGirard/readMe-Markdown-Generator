// TODO: Include packages needed for this application
// inquirer for taking user input
const inquirer = require('inquirer')
// fs for reading and writing the readme file
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your Projects Description?',
        name: 'decription',
    },
    {
        type: 'input',
        message: 'What are the Installation Instructions for your project?',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'Examples of project Usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the Contribution Guidlines for your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the Tests for your project?',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'What License does your application use?',
        choices: ["MIT", "Apache", "GPL", "BSD-2-Clause", "BSD-3-Clause", "BSD-4-Clause", "None"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'userEmail',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMe = generateMarkdown(data)
    fs.writeFile(fileName, `${readMe}`, (err) => err ? console.error(err) : console.log('ReadMe.md Generated!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("README.md", response)
        })
}

// Function call to initialize app
init();
