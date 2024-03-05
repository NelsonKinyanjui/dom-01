const container = document.querySelector('#container');

const paragraph = document.createElement('p');

paragraph.classList.add('paragraph');

paragraph.style.color = 'red';

paragraph.textContent = 'Hey I  Am Red';

container.appendChild(paragraph);