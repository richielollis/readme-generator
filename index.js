// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Title:",
      name: "title",
    },
    {
      type: "input",
      message: "Description:",
      name: "description",
    },
    {
      type: "input",
      message: "Installation:",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage:",
      name: "usage",
    },
    {
      type: "list",
      message: "Lisence:",
      name: "lisence",
      choices: ["MIT", "GLP", "LGPL", "Mozilla Public License", "none"],
    },
    {
      type: "input",
      message: "Contribution Guidelines:",
      name: "contribution",
    },
    {
      type: "input",
      message: "Test Instructions:",
      name: "tests",
    },
    {
      type: "input",
      message: "GitHub Username:",
      name: "githubUserName",
    },
    {
      type: "input",
      message: "Email:",
      name: "email",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./dist/README.md", data, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  promptUser().then((answers) => {
    return generateMarkdown(answers);
  });
}

// Function call to initialize app
init();
