const Engineer = require('../lib/Engineer.js');

// test properties, role, office number, and github 

const testObject = {name: 'Erenst', id: 2, email: "ernest@here.com", github: "ernest"}

test('Checks for inherited Employee properties', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test('Gets Engineer role', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.getRole()).toBe('Engineer');
});

test('Checks for office number', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('Checks for github', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.github).toEqual(expect.any(String));
});



