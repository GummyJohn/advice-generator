const body = document.querySelector('body');

const div = document.createElement('div');
div.className = 'container';

const p = document.createElement('p');
p.className = 'advice-id';
p.innerText = 'Advice #'

const advice = document.createElement('p');
advice.className = 'advice'
advice.innerText = 'Click Button to Start getting FREE ADVICE'

const imgDiv = document.createElement('div');
imgDiv.className = 'divider ';

const button = document.createElement('button');
button.className = 'button'
button.innerHTML = `
  <img src='./images/icon-dice.svg'>
`;


body.prepend(div);

div.appendChild(p);
div.appendChild(advice);
div.appendChild(imgDiv);
div.appendChild(button);

function getAdvice(){
  fetch('https://api.adviceslip.com/advice')
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    p.innerText = `Advice #${response.slip.id}`
    advice.innerText = `"${response.slip.advice}"`
  })
  .catch((err) => {
    alert('ERROR!!!!!');
  })
}

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  getAdvice();
})