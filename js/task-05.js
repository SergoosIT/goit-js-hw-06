const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
  const name = event.currentTarget.value;
  const inputName = name.trim();

  if (inputName !== '') {
    output.textContent = inputName;
  } else {
    output.textContent = 'Anonymous';
  }
});