console.log("testing node")
console.log(process.argv)

const fs = require('fs');

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



