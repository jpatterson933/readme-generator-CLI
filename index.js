console.log("testing node")
console.log(process.argv)

const fs = require('fs');

const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a Project Description: ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter Installation Instructions: ',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Explain Application Usage: ',
      name: 'usage'
    },
    {
      type: 'input',
      message: 'What are your contribution guidelines?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Testing Instructions: ',
      name: 'test',
    },
    {
      type: 'checkbox',
      message: 'please select a license',
      name: 'license',
      choices: [
        {
          key: '1',
          value: 'BSD',
        },
        {
          key: '2',
          value: 'MIT',
        },
        {
          key: '3',
          value: 'GPL',
        },
      ],
    },
    {
      type: 'input',
      message: 'Please enter your GitHub username: ',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Please enter the full applications URL: ',
      name: 'website'
    },
    {
      type: 'input',
      message: 'Please enter your gihub repository URL: ',
      name: 'repository',
    }
  ])
  .then((response) => {
    const readme = `
# ${response.title}

## Notice ${response.license} licenseBadge

This application is covered under ${response.license} License
License Detail: InsertLicenseDetails

# Table of Contents
1. [Description](#description)
2. [Installation](#installation-instructions)
3. [Usage](#application-usage)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Testing](#testing-instrutions)
6. [Questions](#questions)

## Description
${response.description}

## Installation Instructions
${response.install}

## Application Usage
${response.usage}

## Contribution Guidelines
${response.contribution}

## Testing Instrutions
${response.test}

# Questions
If you have any questions that have not been answered, please send me an email: insertemailhere

## Checkout My GitHub!

### [${response.username}](https://github.com/${response.username})
### [Live Application](${response.website})
### [GitHub Repository](${response.repository})`


      fs.writeFile('readme.md', readme, err => {
        err ? console.log(err) : console.log("we did it");
    })

  });



