// THIS IS A TEST FILE TO PRACTICE AND LEARN MORE ABOUT INQUIRER //

// TO RUN PROGRAM TYPE 'node test.js' INTO THE TERMINAL //

//console log process.argv to understand our file system structure
console.log(process.argv)
//our file system module pulled into our index.js
const fs = require('fs');
//our inquirer module pulled into our index.js followed by our prompts
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));


//our prompts
inquirer
    .prompt([
        {
            type: "loop",
            name: "packages",
            message: "Would you like to add any dependencies?",
            questions: [
                {
                    type: "input",
                    name: "npm",
                    message: "Please enter name of dependency.",
                },
            ],
        }

    ])
    //then our reponses to follow
    .then((res) => {

        //all documentation to be put into the readme const
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        <h1>${res.inputTest}</h1>

            
        </body>
        </html>
        `


        //here we are writing the readme.md file with the readme const else throw an error if not, console.log to the user the proces has finished
        fs.writeFile('index.html', html, err => {
            err ? console.log(err) : console.log("Your HTML has been created.");

        })

    });
