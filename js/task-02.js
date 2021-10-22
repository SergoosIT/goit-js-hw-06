const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const ingredientsItems = ingredients.map((ingredient) => {
  const items = document.createElement('li');
  items.textContent = ingredient;
  items.classList.add('item');
  
  return items;
});

listIngredients.append(...ingredientsItems);
console.log(listIngredients);
