// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const numberEL = document.querySelectorAll('li.item');
console.log(' Number of categories:',numberEL.length);

const categoryEL = document.querySelector('h2');
console.log('Category:', categoryEL.textContent);

const elementsEL = document.querySelectorAll('ul');
console.log('Elements:', elementsEL.length);




const productsEL = document.querySelectorAll('h2');

console.log('Category:', productsEL[1].textContent);
console.log('Elements:', productsEL.length);

console.log('Category:', productsEL[2].textContent);

const elementsProdEL = numberEL.Children;
console.log('Elements:', elementsProdEL)

