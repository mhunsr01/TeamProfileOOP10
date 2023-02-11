const fs = require('fs')
// build the employee card
function employeeCard(passedObject) { 
    let variable
    ({
        name, 
        id, 
        email, 
        officeNumber, 
        github, 
        school
    } = passedObject)

    if (officeNumber) {
        variable = `Office Number: ${officeNumber}`
    } else if(github) {
        variable = `GitHub: <a href="https://github.com/${github}"> ${github}</a>`
    } else {
        variable = `School: ${school}`
    }
// display the employee card
    return `
    <div class="card">
                <div class="card-head">
                    <div class="card-name"> ${name} </div>
                    <div class="card-title"> ${passedObject.constructor.name} </div>
                </div>
                <div class="card-body">
                    <div class="id">ID: ${id}</div>
                    <div class="email">Email: <a href="mailto:${email}">${email}</a></div>
                    <div class="variable">${variable}</div>
                </div>
            </div>
    `
}

function howMany(passedObjectArray) {

    let ret = '' 
    console.log(passedObjectArray)
    // console.log(passedObjectArray.length)
    for (i = 0; i < passedObjectArray.length; i++) {
        console.log(`${i}`)
        console.log(passedObjectArray[i])
        console.log(passedObjectArray[i].constructor.name)
        ret += employeeCard(passedObjectArray[i])
    }
    return ret;
}

module.exports = function (passedObjectArray) {
// page header
    let page = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Manager</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
    
        <header>
            The Team
        </header>
    
        <main>
            
            ${howMany(passedObjectArray)}
    
        </main>
    
    </body>
    
    </html>
    ` 

    new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', page, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}