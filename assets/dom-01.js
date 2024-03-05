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

const body = document.createElement('div');

body.classList.add('body');

const headerOne = document.createElement('h1');

headerOne.classList.add('headerOne');

headerOne.textContent = "I'm in a Div";

body.appendChild(headerOne);

const text = document.createElement('P');

text.classList.add('text');

text.textContent = "ME TOO";

body.appendChild(text);

container.appendChild(body);
