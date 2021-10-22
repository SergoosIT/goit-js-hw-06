const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', onInputBlur);
console.log();

function onInputBlur(event) {
  const symbolsLength = event.currentTarget.value.length;
    const validSymbolsLength = Number(event.currentTarget.dataset.length);

    const classes = textInput.classList;

  if (symbolsLength === validSymbolsLength) {
    classes.add('valid');
    classes.contains('invalid') &&
      classes.remove('invalid');
  } else if (symbolsLength === 0) {
    classes.contains('valid') &&
      classes.remove('valid');
    classes.contains('invalid') &&
      classes.remove('invalid');
  } else {
    classes.add('invalid');
    classes.contains('valid') &&
      classes.remove('valid');
    }
}
