// using Intern constructor 
const Intern = require('../lib/Intern');

// creating intern object  
test('creates Intern', () => {
    const intern = new Intern('Sophia', 4996, 'sophial.delarosa@gmail', 'TXST');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Sophia', 4996, 'sophial.delarosa@gmail', 'TXST');
    
    expect(intern.getSchool()).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets intern role', () => {
    const intern = new Intern('Sophia', 4996, 'sophial.delarosa@gmail', 'TXST');

    expect(intern.getRole()).toEqual("Intern");
}); 