function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const input = document.querySelector('#controls').firstElementChild;
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

let amountBoxes;
input.addEventListener('blur', () => {
  amountBoxes = input.value;
});

const createBoxes = (amount) => {
  const sizeBoxes = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${sizeBoxes + (10 * i)}px`;
    boxEl.style.height = `${sizeBoxes + (10 * i)}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    divBoxes.append(boxEl);
  };
};

btnCreate.addEventListener('click', () => {
  createBoxes(amountBoxes);
});

const destroyBoxes = () => {
  divBoxes.innerHTML = '';
};

btnDestroy.addEventListener('click', destroyBoxes);
