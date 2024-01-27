const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Circle, Square, Triangle} = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'character',
        message: 'Input up to three characters to be displayed in the shape:',
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'Choose a text color:',
        choices: ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange', 'black', 'white'],
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['square', 'circle', 'triangle'],
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Choose a shape color:',
        choices: ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange', 'black', 'white'],
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}
function init() {
    inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    let logo;
    if (answers.shape === 'circle'){
        logo = new Circle();
    } else if (answers.shape === 'square'){
        logo = new Square();
    } else if (answers.shape === 'triangle'){
        logo = new Triangle();
    }
    logo.setText(answers.character);
    logo.setTextColor(answers.textColor);
    logo.setShapeColor(answers.shapeColor);
    writeToFile('index.html', logo.render());
    });
}
init();