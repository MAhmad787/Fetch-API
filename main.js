const text = document.getElementById('text');
document.getElementById('getText').addEventListener('click', () => {
  fetch('sample.txt')
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      text.innerHTML = data;
    });
});
