// function to generate markdown for README
function generateMarkdown(data) {
  return `
 
  ## Username
  ${data.username}

  ## Title
  ${data.title}

  ## Repo
  ${data.repo}
  
  ## Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

  To install necessary dependencies run the following command: 
  ${data.installation}
 
  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  To run tests, run the following command:
  ${data.tests}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
