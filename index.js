//console log process.argv to understand our file system structure
console.log(process.argv)

//our file system module pulled into our index.js
const fs = require('fs');
//our inquirer module pulled into our index.js followed by our prompts
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
      //our license prompt checkbox
      type: 'checkbox',
      message: 'Please select a license',
      name: 'license',
      choices: [
        {
          key: '1',
          value: 'MIT',
        },
        {
          key: '2',
          value: 'Apache 2.0',
        },
        {
          key: '3',
          value: 'GPL v3',
        },
      ],
    },
    {
      //BONUS - will your application/site be maintainted? 
      type: 'checkbox',
      message: 'Will this application be maintained?',
      name: 'maintain',
      choices: [
        {
          key: '1',
          value: 'Yes',
        },
        {
          key: '2',
          value: 'No',
        },
        {
          key: '3',
          value: 'Never',
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
  //then our reponses to follow
  .then((response) => {

    //all documentation to be put into the readme const
    const readme = `# ${response.title}

${renderLicense(response.license)}

${maintain(response.maintain)}

# Table of Contents
1. [${response.license}](#license-information)
2. [Description](#application-description)
3. [Installation](#installation-instructions)
4. [Usage](#application-usage)
5. [Contribution Guidelines](#contribution-guidelines)
6. [Testing](#testing-instrutions)
7. [Questions](#questions)

# License Information

${renderLicense(response.license)}

${licenseLink(response.license)} Documentation

Please refer to license documentation for any questions regarding reusing 
this software or any code within this application.

[Back to Top](#table-of-contents)

# Application Description

${response.description}

[Back to Top](#table-of-contents)

# Installation Instructions

${response.install}

[Back to Top](#table-of-contents)

# Application Usage

${response.usage}

[Back to Top](#table-of-contents)

# Contribution Guidelines

${response.contribution}

[Back to Top](#table-of-contents)

# Testing Instrutions

${response.test}

[Back to Top](#table-of-contents)

# Questions

If you have any questions that have not been answered, please send me an email: ${response.email}

## Checkout My GitHub!

[Back to Top](#table-of-contents)

### [${response.username}](https://github.com/${response.username})
### [Live Application](${response.website})
### [GitHub Repository](${response.repository})`


      //here we are writing the readme.md file with the readme const else throw an error if not, console.log to the user the proces has finished
      fs.writeFile('readme.md', readme, err => {
        err ? console.log(err) : console.log("Your ReadMe Markdown file has been created.");
        
    })
    
  });
  //function to generate license badge, uses switch statement and takes input from checkboxes through the lic parameter
  function renderLicense (lic) {
    console.log(lic)
    switch (lic[0]) {
      case "MIT":
        badgeLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        return badgeLink;
      case "Apache 2.0":
        badgeLink = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        return badgeLink;
      case "GPL v3":
        badgeLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        return badgeLink;
      default:
        badgeLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        return badgeLink
    }
  }
  //function to generate a license link, same parameter as the previous function
  function licenseLink(lic) {
    switch(lic[0]) {
      case "MIT":
        link = "[MIT License](https://www.mit.edu/~amini/LICENSE.md)";
        return link;
      case "Apache 2.0":
        link = "[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0.txt)";
        return link;
      case "GPL v3":
        link = "[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0.txt)"
      default:
        link = "[MIT License](https://www.mit.edu/~amini/LICENSE.md)";
        return link;
    }
  }
  //function to display a badge at the top of the readme of whether or not the application will be maintained
  function maintain(m) {
    switch(m[0]) {
      case 'yes':
        badge = "[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)";
        return badge;
      case 'no':
        badge = "[![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://bitbucket.org/lbesson/ansi-colors)";
        return badge;
      case 'never':
        badge = "[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)";
        return badge;
      default:
        badge = "[![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://bitbucket.org/lbesson/ansi-colors)";
        return badge;
    }
  }
  
