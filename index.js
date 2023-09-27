//Packages needed for this application.
const fs = require('fs');
const inquirer = require('inquirer');

//Array of questions for user input.
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of the project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter the description of the project:',
  },
  {
    type: 'input',
    name: 'challenge',
    message: "Describe the project's challenge:",
  },
  {
    type: 'input',
    name: 'user_story',
    message: 'Enter the User Story:',
  },
  {
    type: 'input',
    name: 'acceptance_criteria',
    message: 'Enter the Acceptance Criteria:',
  },
  {
    type: 'input',
    name: 'gif',
    message: 'Enter the GIF location:',
  },
  {
    type: 'input',
    name: 'installation_instructions',
    message: "Enter the Installation Instructions:",
  },
  {
    type: 'input',
    name: 'usage_instructions',
    message: "Enter the Usage Instructions:",
  },
  {
    type: 'input',
    name: 'technologies_used',
    message: 'What technologies did you use?',
  },
  {
    type: 'input',
    name: 'video_location',
    message: "Enter video location:",
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'Enter the Screenshot location:',
  },
  {
    type: 'input',
    name: 'test',
    message: "Enter the testing process:",
  },
  {
    type: 'input',
    name: 'questions',
    message: "Enter your Email address",
  },
  {
    type: 'input',
    name: 'questionsGH',
    message: "Enter your GitHub username",
  },
  {
    type: 'input',
    name: 'credits',
    message: "Enter the credits:",
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC'],
  },
];

//Function that generates the responses 
function generateReadme(userResponses) {
  const {
    title,
    description,
    challenge,
    user_story,
    acceptance_criteria,
    gif,
    installation_instructions,
    usage_instructions,
    technologies_used,
    video_location,
    screenshot,
    test,
    questions,
    questionsGH,
    credits,
    license,
  } = userResponses;

//Variables for the badge and notice
let licenseBadge = '';
let licenseNotice = '';

//Function that returns the license badge and link based on which license is selected
switch (license) {
  case 'MIT':
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    licenseNotice = 'This application is covered under the MIT License.';
    break;
  case 'Apache 2.0':
    licenseBadge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    licenseNotice = 'This application is covered under the Apache 2.0 License.';
    break;
  case 'GNU GPLv3':
    licenseBadge = '[![License: GNU GPLv3](https://img.shields.io/badge/License-GNU%20GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    licenseNotice = 'This application is covered under the GNU GPLv3 License.';
    break;
  case 'ISC':
    licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    licenseNotice = 'This application is covered under the ISC License.';
    break;
  default:
    licenseBadge = '';
    licenseNotice = '';
}

//Generate the README content using template literals
const readmeContent = `

# ${title}

## Description
${description}

${licenseBadge}

## Table of Contents:

- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [GIF](#GIF)
- [Installation Instructions](#Installation-Instructions)
- [Usage Instructions](#Usage-Instructions)
- [Technologies Used](#Technologies-Used)
- [Video Location](#Video-Location)
- [Screenshots](#Screenshots)
- [Test](#Test)
- [Questions](#Questions)
- [Credits](#Credits)
- [License](#License)

# Overview

## Challenge
${challenge}

## User Story
${user_story}

## Acceptance Criteria
${acceptance_criteria}

## GIF
![GIF](${gif})

## Installation Instructions
${installation_instructions}

## Usage Instructions
${usage_instructions}

## Technologies Used
${technologies_used}

## Video Location
[${video_location}](${video_location})

## Screenshots
![Screenshot](${screenshot})

## Test
${test}

## Questions?

If you have any questions related with this HQ README File Generator, feel free to reach me through:

Email:[${questions}](${questions})

GitHub username:[${questionsGH}](${questionsGH})                                                      
GitHub link: https://github.com/${questionsGH}

## Credits
${credits}

## License
${licenseNotice}
${licenseBadge}`;

  return readmeContent;
}

//Function to write README file.
function writeToFile(fileName, data) {
  // fs module to write data to the file.
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`You have succesfully generated your ${fileName}`);
    }
  });
}

// Function to initialize app.
function init() {
  inquirer
    .prompt(questions)
    .then((userResponses) => {
      // Generate README content based on userResponses.
      const readmeContent = generateReadme(userResponses);

      // Specify the filename for the generated README.
      const fileName = 'HQ-README.md';

      // Write the README content to the file.
      writeToFile(fileName, readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the init function to start the application.
init();
