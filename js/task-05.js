// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), 
// подставляет его текущее значение в span#name - output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
console.log(inputEl)

// inputEl.textContent = 'Anonymous';
inputEl.addEventListener("input", onInput);

function onInput (event)  {
  const value = event.target.value.trim();

if (!value) return (outputEl.textContent = 'Anonymous');
return (outputEl.textContent = value);
};