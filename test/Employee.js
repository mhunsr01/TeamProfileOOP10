const Employee = require('../lib/Employee.js');

// test the properties, role, name, ID, and email

test('Checks for required Employee properties', () => {
    const employee = new Employee('who', 1,'email@here.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
test('Gets employees role', () => {
    const employee = new Employee('who', 1,'email@here.com');
    expect(employee.getRole()).toBe('Employee')
});

test('Gets employees name', () => {
    const employee = new Employee('who', 1,'email@here.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('Gets employees id', () => {
    const employee = new Employee('who', 1,'email@here.com');
    expect(employee.getId()).toEqual(expect.any(String));
}); 

test('Gets employees email', () => {
    const employee = new Employee('who', 1,'email@here.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

