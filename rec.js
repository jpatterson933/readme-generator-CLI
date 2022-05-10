// THIS IS A TEST FILE TO PRACTICE AND LEARN MORE ABOUT INQUIRER-LOOP //

// TO RUN PROGRAM TYPE 'node test.js' INTO THE TERMINAL //

//console log process.argv to understand our file system structure
console.log(process.argv)
//our file system module pulled into our index.js
const fs = require('fs');
//our inquirer module pulled into our index.js followed by our prompts
const inquirer = require('inquirer');
// Recursive
inquirer.registerPrompt('recursive', require('inquirer-recursive'));


//our prompts
inquirer
    .prompt([
        {
            type: 'recursive',
            message: 'Add a new user ?',
            name: 'users',
            prompts: [
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is user\'s name?',
                    validate: function (value) {
                        if ((/.+/).test(value)) { return true; }
                        return 'name is required';
                    }
                }, {
                    type: 'input',
                    name: 'age',
                    message: 'How old is he?',
                    validate: function (value) {
                        var digitsOnly = /\d+/;
                        if (digitsOnly.test(value)) { return true; }
                        return 'Invalid age! Must be a number genius!';
                    }
                }
            ]
        }
    ])
    //then our reponses to follow
    .then((response) => {

        console.log(response.users)

        var result = response.users.map((person) => ({
            value: person.name, text: person.age
        }))

        console.log(result)


        //all documentation to be put into an html file
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Recursive File</title>
        </head>
        <body>
        <h1>${result[0].value}</h1>
            
        </body>
        </html>
        `



        //here we are writing the html file with the html const else throw an error if not, console.log to the user the proces has finished
        fs.writeFile('recursive.html', html, err => {
            err ? console.log(err) : console.log("Your HTML has been created.");

        })

    });