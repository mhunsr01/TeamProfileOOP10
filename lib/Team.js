const inquirer = require("inquirer");
const EngEL = require("./Engineer");
const InternEl = require("./Intern");
const ManEl = require("./Manager");
const renderPage = require("../src/template")

class Team {
    constructor() {
        this.member = [];
    }

// employee information
    async addEmployee(passedChoice) { 
        if (passedChoice === 'Add Engineer') {
            await this.addEngEl()
        } else {
            await this.addIntern()
        }
        console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - -`)
    }
// engineer information
    async addEngEl() {
        console.log('Adding Engineer!')
        await inquirer
            .prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `Who is the Engineer? `,
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `What is the Engineer's ID? `,
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the Engineer's email? `,
                },
                {
                    type: `input`,
                    name: `github`,
                    message: `What is the Engineer's github? `,
                },
            ])
            .then((EngineerObject) => {
                this.member.push(new EngEL(EngineerObject));
            });
        console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - -`)
    }

// intern information
    async addInternEl() {
        console.log('Adding Intern!')
        await inquirer
            .prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `Who is the Intern? `,
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `What is the Intern's ID? `,
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the Intern's email? `,
                },
                {
                    type: `input`,
                    name: `school`,
                    message: `Where did the Intern go to school? `,
                },
            ])
            .then((internObject) => {
                this.member.push(new InternEl(internObject));
            });
        console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - -`)
    }

    async initializeTeam() {
        await this.addManEl();
        await this.makeChoice();
    }
// manager information
    async addManEl() {
        await inquirer
            .prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `Who is the Team Manager's? `,
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `Provide the Team Manager's ID? `,
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the Team Manager's email? `,
                },
                {
                    type: `input`,
                    name: `officeNumber`,
                    message: `What is the Team Manager's office number? `,
                }
            ])

            .then((managerObject) => {
                this.member.push(new ManEl(managerObject));
            });
    }
    async makeChoice() {
        await inquirer.prompt({
            type: `list`,
            name: `choice`,
            message: `What would you like to do now?`,
            choices: [`Add Engineer`, `Add Intern`, `Finish Building`],
        })
            .then(async ({ choice }) => { 
                console.log(choice)
                if (choice === 'Finish Building') {
                    console.log('Wrapping things up...')
                    this.buildTeam(this.member)
                    return 
                } else {
                    await this.addEmployee(choice)
                    this.makeChoice()
                }
            })
    }
// building the team
    async buildTeam(passedArray) {
        console.log(`Creating the Team!`)
        console.log(passedArray)
        console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - -`)
        renderPage(passedArray) 
    }
}

module.exports = Team;