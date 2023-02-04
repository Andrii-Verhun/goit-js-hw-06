const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const lisItem = ingredients.map((el) => {
  const element = document.createElement('li');
  element.textContent = `${el}`;
  element.classList.add('item');
  return element;
});
document.querySelector('#ingredients').append(...lisItem);