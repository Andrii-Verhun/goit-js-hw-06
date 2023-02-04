const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.map((el) => {
  const element = document.createElement('li');
  element.textContent = `${el}`;
  element.classList.add('item');
  document.querySelector('#ingredients').append(element);
});