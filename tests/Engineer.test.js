// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates Engineer', () => {
    const engineer = new Engineer('Sophia', 4996, 'sophial.delarosa@gmail.com', 'sophiadelarosa');
    expect(engineer.github).toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Sophia', 4996, 'sophial.delarosa@gmail.com', 'sophiadelarosa');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

// gets role from getRole() 
test('gets engineer role', () => {
    const engineer = new Engineer('Sophia', 4996, 'sophial.delarosa@gmail.com', 'sophiadelarosa');
    expect(engineer.getRole()).toEqual("Engineer");
});