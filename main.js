const output = document.getElementById('text');

// Get Text sample

document.getElementById('getText').addEventListener('click', () => {
  fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
      output.innerHTML = data;
    });
});

// Get Users from local JSON
document.getElementById('getUsers').addEventListener('click', () => {
  fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
      let outputText = ` <h2>Users</h2>`;
      data.forEach((item) => {
        outputText += `
            <ul>
                <li>User: ${item.id} </li>
                <li>Name ${item.name}</li>
                <li>Age ${item.age}</li>
            </ul>
              `;
      });
      output.innerHTML = outputText;
    });
});
