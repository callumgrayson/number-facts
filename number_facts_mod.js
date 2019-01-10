// Number Facts App

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactsAll);

function showAlert(message, className) {
  const div = document.createElement('div');
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('#container-card');
  const firstCard = document.querySelector('#fact-trivia');
  container.insertBefore(div, firstCard);
  // Vanish in 3 seconds
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

function getFactFetch(type) {
  let number = numberInput.value;
  let fact = document.querySelector('#fact-' + type);
  let factText = document.querySelector('#factText-' + type);

  if (number < 0) {
    showAlert('Numbers must be positive', 'danger');
    numberInput.value = 0;
  }

  const valid = number && number >= 0;

  valid && fetch('http://numbersapi.com/' + number + '/' + type)
    .then(response => response.text())
    .then(data => {
      fact.style.display = 'block';
      factText.innerText = data;
    })
    .catch(err => console.log(err));
}

function getFactsAll() {
  getFactFetch('trivia');
  getFactFetch('math');
  getFactFetch('year');
}