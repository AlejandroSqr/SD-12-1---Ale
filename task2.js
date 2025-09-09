// Task 2: listUsers()

fetch ('localhost:3000/users/users.json')
  .then(response => response.json())
  .then(data => console.log(data));
