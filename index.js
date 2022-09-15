// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please give a description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions for your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the usage of your project?",
      name: "usage",
    },
    {
      type: "list",
      message: "Choose the license that your project is covered under.",
      name: "license",
      choices: ["MIT", "GLP", "LGPL", "None"],
    },
    {
      type: "input",
      message: "What are the contribution guidelines for your project?",
      name: "contribution",
    },
    {
      type: "input",
      message: "What are the test instructions for your project?",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your Github username?",
      name: "githubUserName",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("./dist/generated-README.md", data, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then((answers) => {
      return generateMarkdown(answers);
    })
    .then((pageMD) => {
      writeToFile(pageMD);
    });
}

// Function call to initialize app
init();
