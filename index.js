// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//THIS IS THE CODE FROM THE MINI-PROJECT 09.NODE JS.

const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter your name:',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Enter your location:',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub URL:',
    },
  ])