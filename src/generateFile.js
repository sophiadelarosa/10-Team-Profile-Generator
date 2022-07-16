// create Manager box
const generateManager = function (manager) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>${manager.name}</h3>
        <h4>Manager</h4>
      </div>
      <div class="card-body">
        <p class="id">ID: ${manager.id}</p>
        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="office">Office Number: ${manager.officeNumber}</p>
      </div>
    </div>
  </div>
  `;
}

// create Engineer box
const generateEngineer = function (engineer) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
          <h3>${engineer.name}</h3>
          <h4>Engineer</h4>
      </div>
      <div class="card-body">
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
      </div>
    </div>
  </div>
  `
}

// create Intern box
const generateIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>${intern.name}</h3>
        <h4>Intern</h4>
      </div>
      <div class="card-body">
        <p class="id">ID: ${intern.id}</p>
        <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="school">University: ${intern.school}</p>
      </div>
    </div>
  </div>
  `
};

// push array to page 
generateFile = (data) => {

  // array for cards 
  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 

      // call manager function
      if (role === 'Manager') {
          const managerCard = generateManager(employee);

          pageArray.push(managerCard);
      }

      // call engineer function
      if (role === 'Engineer') {
          const engineerCard = generateEngineer(employee);

          pageArray.push(engineerCard);
      }

      // call intern function 
      if (role === 'Intern') {
          const internCard = generateIntern(employee);

          pageArray.push(internCard);
      }
      
  }

  // joining strings 
  const employeeCards = pageArray.join('')

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards); 
  return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
return`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav class="navbar" id="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
    </nav>
</header>
  <main>
    <div class="container">
      ${employeeCards}
    </div>
  </main>
</body>
</html>
`;
}

module.exports = generateFile;