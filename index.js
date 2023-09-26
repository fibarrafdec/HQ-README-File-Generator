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
    type: 'input',
    name: 'license',
    message: 'What license are you using?',
  },
];

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

  // Generate the README content using template literals.
  const readmeContent = `
# ${title}

## Description
${description}

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

## Screenshot
![Screenshot](${screenshot})

## Test
${test}

## Questions?

If you have any questions related with this HQ README File Generator, feel free to reach me through:

Email:[${questions}](${questions})

GitHub username:[${questionsGH}](${questionsGH})

## Credits
${credits}

## License
This project is licensed under the ${license} License.
`;

  return readmeContent;
}

//Function to write README file.
function writeToFile(fileName, data) {
  // fs module to write data to the specified file.
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
      const fileName = 'README.md';

      // Write the README content to the file.
      writeToFile(fileName, readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the init function to start the application.
init();
