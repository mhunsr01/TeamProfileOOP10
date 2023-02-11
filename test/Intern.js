const Intern = require('../lib/Intern.js');

// test properties, role, and school 

const testObject = {name: 'Intern', id: 3, email: "intern@here.com", school: "school"}

test('Checks for inherited Employee properties', () => {
    const intern = new Intern(testObject);
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test('Gets Intern role', () => {
    const intern = new Intern(testObject);
    expect(intern.getRole()).toBe('Intern');

test('Checks for school', () => {
    const intern = new Intern(testObject);
    expect(intern.school).toEqual(expect.any(String));
});

test('Gets Interns school', () => {
    const intern = new Intern(testObject);
    expect(intern.getSchool()).toEqual(expect.any(String));
});

});