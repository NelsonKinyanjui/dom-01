const container = document.querySelector('#container');

const paragraph = document.createElement('p');

paragraph.classList.add('paragraph');

paragraph.style.color = 'red';

paragraph.textContent = 'Hey I  Am Red';

container.appendChild(paragraph);

const heading = document.createElement('h3');

heading.classList.add('heading');

heading.style.color = 'blue';

heading.textContent = 'I am blue h3';
container.appendChild(heading);


