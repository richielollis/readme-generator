// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![badmath](https://img.shields.io/badge/license-${license}-green)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return "- [License](#license)";
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return ` 
  
  ## License 

  Licensed under ${license}.
  
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    license,
    contribution,
    tests,
    githubUserName,
    email,
  } = data;

  return `
  # ${title}

  ${renderLicenseBadge(license)} 

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(license)}
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Contributing
  
  ${contribution}

  ## Tests

  ${tests}

  ## Questions

  [My Github](https://github.com/${githubUserName})

  If you have any additional questions, you can contact me at ${email}
  
  ${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
