// External packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [

  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is the name of your GitHub repo?",
    name: "repo",
  },
  {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
 {
      type: 'input',
      message: "If applicable, describe the steps required to install your project for the Installation section.",
      name: 'installation'
  },
  {
      type: 'input',
      message: "Provide instructions and examples of your project in use for the Usage section.",
      name: 'usage'
  },
  {
      type: 'input',
      message: "If applicable, provide guidelines on how other developers can contribute to your project.",
      name: 'contributing'
  },
  {
      type: 'input',
      message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
      name: 'tests'
  },
  {
      type: 'list',
      message: "Choose a license for your project.",
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
      name: 'license'
  }
    
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((inquirerResponses)=>{
    writeToFile("readme.md", generateMarkdown({...inquirerResponses}))
  })

}

// function call to initialize program
init();


