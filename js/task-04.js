let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");
const btnIncrement = document.querySelector('button[data-action="increment"]');

const increaseByOne = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
const reduceByOne = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
btnDecrement.addEventListener("click", increaseByOne);
btnIncrement.addEventListener("click", reduceByOne);


valueEl.textContent = counterValue;
console.log(counterValue);