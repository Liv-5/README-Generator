// TODO: Include packages needed for this application
//done

import inquirer from "inquirer";
import fs from "fs";

const generateRM = ({
  title,
  description,
  install,
  screenshot,
  credits,
  license,
  contribute,
  test,
  email,
  github,
}) => {
  return `# ${title}
 ${renderLicenseBadge(license)}
  ## Description
  
  ${description}

  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)

  
  
  ## Installation
  
   ${install}
  
  ## Usage
  
  ${screenshot}
  
  ## Credits
  
  ${credits}
  
  ## License
  
  This project is licensed under ${renderLicenseLink(license)}

  
  ## How to Contribute
  
  ${contribute}
  
  
  ## Test
  
  ${test}
  
  
  ## Questions
  If you have any questions regarding this project you can email me at (email)${email} or go to my [GitHuB](${github})
  
  `;
};

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your Project?",
    },
    {
      type: "input",
      name: "description",
      message:
        "Please write a short description on project and why you created it?",
    },
    {
      type: "input",
      name: "install",
      message: "How can the user install this?",
    },
    {
      type: "input",
      name: "screenshot",
      message: "Submit a screenshot using the file path in parentheses",
    },
    {
      type: "input",
      name: "credits",
      message:
        "Did you collaborate with anyone or would like to credit any resources used?",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license",
      choices: [
        "MIT License",
        "Apache License v2.0",
        "GNU General Public License v3.0 ",
        "Boost Software License 1.0",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Eclipse Public License 2.0",
        "The Unilicense",
        "Mozilla Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "None",
      ],
    },
    {
      type: "input",
      name: "contribute",
      message: "How can others contribute to this project?",
    },
    {
      type: "input",
      name: "test",
      message: "How can users test this, give examples?",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email",
    },
    {
      type: "input",
      name: "github",
      message: "Add your github link/url",
    },
  ])
  .then((answers) => {
    // { name: '', location: '', hobby: '' ... }
    const READMEPage = generateRM(answers);
    console.log("Returned Data: ", READMEPage);

    fs.writeFile("./output/README.md", READMEPage, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md")
    );
  });

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "![Badge: MIT](https://img.shields.io/badge/License-MIT-blue.svg)";
  } else if (license === "Apache License v2.0") {
    return "![Badge](https://img.shields.io/badge/License-Apache%202.0-green.svg)";
  } else if (license === "Boost Software License 1.0") {
    return "![Badge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
  } else if (license === "GNU General Public License v3.0") {
    return "![Badge](https://img.shields.io/badge/License-GPL3.0-blue.svg)";
  } else if (license === "BSD 2-Clause 'Simplified' License") {
    return "![Badge](https://img.shields.io/badge/License-BSD2Simplified-orange.svg)";
  } else if (license === "BSD 3-Clause 'New' or 'Revised' License") {
    return "![Badge](https://img.shields.io/badge/License-BSD3-yellow.svg)";
  } else if (license === "Eclipse Public License 2.0") {
    return "![Badge](https://img.shields.io/badge/License-Eclipse-navy.svg)";
  } else if (license === "The Unilicense") {
    return "![Badge](https://img.shields.io/badge/License-Unilicense-purple.svg)";
  } else if (license === "Mozilla Public License 2.0") {
    return "![Badge](https://img.shields.io/badge/License-Mozilla-darkred.svg)";
  } else if (license === "GNU Affero General Public License v3.0") {
    return "![Badge](https://img.shields.io/badge/License-AfferoGPL-darkgreen.svg)";
  } else if (license === "GNU General Public License v2.0") {
    return "![Badge](https://img.shields.io/badge/License-GPL2.0-white.svg)";
  } else if (license === "GNU Lesser General Public License v2.1") {
    return "![Badge](https://img.shields.io/badge/License-LesserGPL2.1-pink.svg)";
  } else return "";
}

// "MIT License",
// "Apache License v2.0",
// "GNU General Public License v3.0 ",
// "Boost Software License 1.0",
// "BSD 2-Clause 'Simplified' License",
// "BSD 3-Clause 'New' or 'Revised' License",
// "Eclipse Public License 2.0",
// "The Unilicense",
// "Mozilla Public License 2.0",
// "GNU Affero General Public License v3.0",
// "GNU General Public License v2.0",
// "GNU Lesser General Public License v2.1",
// "None",

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "[MIT](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache-2.0") {
    return "[Apache-2.0](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSL-1.0") {
    return "![license](https://opensource.org/licenses/BSL-1.0)";
  } else if (license === "0BSD") {
    return "![license](https://opensource.org/licenses/0BSD)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// done above
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
