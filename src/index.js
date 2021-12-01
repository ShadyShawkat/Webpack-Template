import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'sad';

  return element;
}

document.body.appendChild(component());