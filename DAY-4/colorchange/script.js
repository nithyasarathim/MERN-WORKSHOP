

const body = document.querySelector('body');
const button = document.querySelector('button');

const color = [
  'red',
  'black',
  'blue',
  'pink',
  'yellow',
  'green',
  'violet',
  'whitesmoke'
];

// button.forEach((button) =>
  button.addEventListener('click', () => {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
  })
// );