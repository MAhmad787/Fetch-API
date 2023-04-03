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
            <hr/>
              `;
      });
      output.innerHTML = outputText;
    });
});
// Get Posts from External API
document.getElementById('getPosts').addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      let outputText = ` <h2>Posts</h2>`;
      data.forEach((post) => {
        outputText += `
            <div>
                <h3>${post.title} </h3>
                <p>${post.body}</p>
            </div>
            <hr/>
              `;
      });
      output.innerHTML = outputText;
    });
});
// Send Posts to External API
document.getElementById('addPosts').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
