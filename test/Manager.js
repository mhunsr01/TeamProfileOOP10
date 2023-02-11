const Manager = require('../lib/Manager.js');

// test properties, role, and office number 

const testObject = {name: 'Manager', id: 1, email: "Boss@here.com", officeNumber: "101"}

test('Checks for inherited Employee properties', () => {
    const manager = new Manager(testObject);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test('Gets Manager role', () => {
    const manager = new Manager(testObject);
    expect(manager.getRole()).toBe('Manager');

test('Checks for office number', () => {
    const manager = new Manager(testObject);
    expect(manager.officeNumber).toEqual(expect.any(String));
});

});