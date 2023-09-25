//Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

//Array of questions for user input
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
    name: 'deployed_application_URL',
    message: "Enter deployed application's URL:",
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'Enter the Screenshot location:',
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
    usage_instructions,
    technologies_used,
    deployed_application_URL,
    screenshot,
    credits,
    license,
  } = userResponses;

  // Generate the README content using template literals
  const readmeContent = `
# ${title}

## Description
${description}

## Challenge
${challenge}

## User Story
${user_story}

## Acceptance Criteria
${acceptance_criteria}

## GIF
![GIF](${gif})

## Usage Instructions
${usage_instructions}

## Technologies Used
${technologies_used}

## Deployed Application URL
[${deployed_application_URL}](${deployed_application_URL})

## Screenshot
![Screenshot](${screenshot})

## Credits
${credits}

## License
This project is licensed under the ${license} License.
`;

  return readmeContent;
}

//Function to write README file
function writeToFile(fileName, data) {
  // fs module to write data to the specified file
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`You have succesfully generated your ${fileName}`);
    }
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((userResponses) => {
      // Generate README content based on userResponses
      const readmeContent = generateReadme(userResponses);

      // Specify the filename for the generated README
      const fileName = 'README.md';

      // Write the README content to the file
      writeToFile(fileName, readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the init function to start the application
init();
