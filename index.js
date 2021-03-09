console.log("testing node")
console.log(process.argv)

const fs = require('fs');


//Directions and pseudocode



// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// inquirer

//I am going to need a input for Title of Project
//sections Description - Table of Contents - Installation - Usage - License - Contributing - Tests - Questions
//User will need to enter a
//Project Title
//Description - Description 
//Installation Instructions - Installation
//Usage Information - Usage - instruct people how to use your project after it is installed
//Contribution Guidelines - Contributing
//Test Instructions - Test
//--INFORMATION ENTERED WILL BE ADDED TO THE CORRESPONDING README SECTIONS
//Next the user will choose a license for the application from a list of options
//then a badge for that license is addd near the top of the readme and a notice is added to the section of the 
//README entitled License that explains which license the application is covered under
//User will enter GitHub username which will be added to -Questions- with a link to their profile
//user will enter their email which will be added to the -Questions- with instruction of how to reach me with additional questions
//when the user clicks on the links in the newly generated readme
//then they are taken to the corresponding section of the readme
//ROUGH DRAFT
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'projectTitle',
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
      message: 'Please enter the applications URL: ',
      name: 'website'
    },
    {
      type: 'input',
      message: 'Please enter your gihub repository URL: ',
      name: 'repository',
    }
  ])
  .then((response) => {
    const readme = 
    `# ${response.projectTitle} <br>
    ### Description: ${response.description} <br>
    ### Installation Instructions: ${response.install}`





      fs.writeFile('readme.md', readme, err => {
        err ? console.log(err) : console.log("we did it");
    })

  });



