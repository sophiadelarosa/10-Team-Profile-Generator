// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates Manager', () => {
    const manager = new Manager('Sophia', 4996, 'sophial.delarosa@gmail', 4045238777);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets manager role', () => {
    const manager = new Manager('Sophia', 4996, 'sophial.delarosa@gmail');
    expect(manager.getRole()).toEqual("Manager");
}); 