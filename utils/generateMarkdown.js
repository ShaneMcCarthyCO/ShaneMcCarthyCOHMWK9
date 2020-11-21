// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.username}
  ##${data.username}
  ##${data.email}
  ##${data.repo}
  ##${data.installation}
  ##${data.usge}
  ##${data.contributing}
  ##${data.tests}
  ##${data.license}
`;
}

module.exports = generateMarkdown;
