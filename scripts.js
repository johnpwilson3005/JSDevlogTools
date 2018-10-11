const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
};

// Regular
console.log('hello');

// Interpolated similar to es6 backticks ``
console.log('Hello I am a %s string', '💩');

// Styled %c allows you to style your log
console.log('%c I am some big text', 'font-size: 50px;');

// warning!
console.warn('WARNING, CODE IS TOO LONG!');

// Error :|
console.error('ERROR, CONSOLE SAD');

// Info
console.info('Banging your heard against the wall burns 150 calories per hour');

// Testing will log if something is wrong in Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is incorrect!');

// clearing clears your DOM...
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// console.clear();

// Grouping together
dogs.forEach(dog => {
console.groupCollapsed(`${dog.name}`);
console.log(`This is ${dog.name}`);
console.log(`${dog.name} is ${dog.age} years old`);
console.log(`${dog.name} is ${dog.age * 7} dog years old`);
console.groupEnd(`${dog.name}`);
});

// counting counts how many times you've logged anything
console.count('pants');
console.count('pants');
console.count('pants');
console.log('pizza');
console.count('pants');
console.count('pants');
console.count('pants');
console.count('pants');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos').then(data => data.json()).then(data => {
  console.timeEnd('fetching data');
  console.log(data);
});

//table
console.table(dogs);
