//---------#1----------
const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

//---------#2----------

const elInCategory = (categories) => {
    categories.forEach(el => {
        console.log(`Category: ${el.querySelector('h2').textContent}`);
        console.log(`Elements: ${el.querySelectorAll('li').length}`);
    });
};

elInCategory(categories);