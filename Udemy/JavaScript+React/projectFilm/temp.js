// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (hamburger === 3 && cola && fries) {
//    console.log('Все сыты');
// } else {
//    console.log('Exit');
// }

// let hamburger = 1;
// const fries = 1;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// } else {
//    console.log('none')
// }



// const home = prompt('login', '');

// if (home === 'admin') {
//    let password = prompt('Password', '');
//    if (password === '123') {
//       alert('Hello Boss');
//    } else if (password === '' || password === null) {
//       alert('canceled');
//    } else {
//       alert('Error!');
//    }
// } else if (home === '' || home === null) {
//    alert('Canceled');
// } else {
//    alert('Go home!');
// }


// for (let i = 1; i <= 10; i++) {
//    if (i === 6) {
//       // break;
//       continue;
//    }

//    console.log(i);
// }

// let i = 0;
// while (i < 3) {
//    alert(`number ${i}!`);
//    i++;
// }

// for (let i = 0; i < 3; i++) {
//    alert(`number ${i}!`);
// }

// let i = 0;
// for (; i < 100;) {
//    let num = +prompt('Введите число больше 100', '');
//    if (num >= 100 || !num) {
//       break;
//    }
// }

// let n = 10;
// let i = 2;

// next:
// for (; i <= n; i++) {
//    for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue next;
//    }
//    alert(i);
// }

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//    for (let j = 0; j < i; j++) {
//       result += '*';
//    }

//    result += '\n';
// }

// console.log(result);


// for (i = 2; i <= 10; i++) {

//    if (i % 2 == 1) {
//       continue;
//    }
//    console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//    if (i % 2 === 0) {
//       continue;
//    } else {
//       console.log(i);
//    }
// }


// let i = 2;
// while (i < 16) {
//    i++;
//    if ((i % 2) === 0) {
//       continue;
//    }
//    console.log(i);
// }


// const arrayOfNumbers = [];

// for (let i = 5; i <= 10; i++) {
//    arrayOfNumbers.push(i);
// }
// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i of arr) {
//    result.push(i);
// }

// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//    if (typeof data[i] === 'number') {
//       data[i] *= 2;

//    } else {
//       data[i] += '-done';

//    }

// } console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// data.reverse();
// for (let i of data) {

//    result.push(i);
// }

// console.log(result);


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//    for (let j = 0; j < lines - i; j++) {
//       result += " ";
//    }
//    for (let j = 0; j < 2 * i + 1; j++) {
//       result += "*";
//    }
//    result += "\n";
// }

// console.log(result)

// function sayHello(name) {
//    return `Hello, ${name}!`;
// }

// console.log(sayHello('Mike'));


// function returnNeighboringNumbers (num) {
//    return [num -1, num, num +1];
// }

// console.log (returnNeighboringNumbers(18));

// function getMathResult(num, step) {
//    if (typeof (step) !== 'number' || step <= 0) {
//       return num;
//    }
//    let str = '';
//    for (let i = 1; i <= step; i++) {
//       if (i === step) {
//          str += `${num * i}`;
//       } else {
//          str += `${num * i}---`;
//       }
//    }
//    return str;
// }

// console.log(getMathResult(10, 3));

// function calculateVolumeAndArea(x) {
//    if (isNaN(x) || x <= 0 || Number.isInteger(x) == 0) {
//       return 'При вычислении произошла ошибка';
//    }
//    return `Объем куба: ${x * x * x}, площадь всей поверхности: ${6 * (x * x)}`;
// }

// console.log(calculateVolumeAndArea(5));


// function getCoupeNumber(num) {
//    if (isNaN(num) || num < 0 || Number.isInteger(num) == 0) {
//       return 'Ошибка. Проверьте правильность введенного номера места';
//    } if (num < 1 || num > 36) {
//       return 'Таких мест в вагоне не существует';
//    }

//    for (let i = 1; i < 36; i++) {
//       return Math.ceil(num / 4);
//    }
// }

// console.log(getCoupeNumber(7));


// // function getTimeFromMinutes(t) {
// //    let time = t / 60;
// //    let min = ((time % 60) * 60);
// //    if (time != (time % 1 === 0)) {
// //       return `0 часов : `;
// //    }
// // }

// function timesmin(t) {

//    let time = Math.floor(t / 60);
//    let min = ((t % 60) / 60 * 60);
//    let hour = '';
//    if (isNaN(t) || t < 0 || Number.isInteger(t) == 0) {
//       return 'Ошибка, проверьте данные';
//    }

//    if (time === 2 || time === 3 || time === 4) {
//       hour = 'часа';
//    } else if (time === 0 || time === 5 || time === 6 || time === 7 || time === 8 || time === 9 || time === 10) {
//       hour = 'часов';
//    } else if (time === 1) {
//       hour = 'час';
//    }

//    return `Это ${time} ${hour} и ${min} минут`;
// }

// console.log(timesmin(0));


// function findMaxNumber(a, b, c, d) {
//    if (isNaN(a, b, c, d) || findMaxNumber.length < 4 || findMaxNumber.length > 4) {
//       return 0;
//    }
//    return Math.max(a, b, c, d);
// }

// console.log(findMaxNumber(1, 4, 5, 30));


// function fib(num) {
//    if (typeof (num) != 'number') {
//       return '';
//    }
//    let a = 0;
//    let b = 1;
//    let res = '';
//    for (let i = 0; i < num; i++) {
//       if (i + 1 === num) {
//          res += `${a}`;
//       } else {
//          res += `${a}`;
//       }
//       let c = a + b;
//       a = b;
//       b = c;
//    }

//    return res;
// }

// console.log(fib(17));


// function first() {
//    setTimeout(function () {
//       console.log(1);
//    }, 500);
// }

// function second() {
//    console.log(2);
// }

// first();
// second();

// function learndJS(lang, callback) {
//    console.log(`Я учу: ${lang}`);
//    callback();
// }
// function done() {
//    console.log('Я прошел этот урок!');
// }
// learndJS('JavaScript', done);

// const options = {
//    name: 'John',
//    with: 1024,
//    height: 1024,
//    colors: {
//       border: 'black',
//       bg: 'red'
//    },
//    makeTest: function () {
//       console.log('Test');
//    }
// };
// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// delete options.name;
// console.log(options);

// let counter = 0;
// for (let key in options) {
//    if (typeof (options[key]) === 'object') {
//       for (let i in options[key]) {
//          console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//          counter++;
//       }
//    } else {
//       console.log(`Свойство ${key} имеет значение ${options[key]}`);
//       counter++;
//    }
// }
// console.log(counter);



// const arr = [1, 22, 13, 56, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//    return a - b;
// }
// arr [99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//    console.log(`${i}: ${item} внутри массива ${arr}`)
// });
// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// for(let value of arr) {
//    console.log (value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// const personalPlanPeter = {
//    name: "Peter",
//    age: "29",

//    skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//          js: '20%',
//          php: '10%'
//       },
//       exp: '1 month'
//    },
//    showAgeAndLangs: function (plan) {
//       const { age } = plan;
//       const { languages } = plan.skills;
//       let str = `Мне ${age} лет и я владею языками: `;

//       languages.forEach(function (lang) {
//          str += `${lang.toUpperCase()}`;
//       });

//       return str;
//    }
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//    let { exp } = plan.skills;
//    return exp;
// }

// console.log(showExperience(personalPlanPeter));



// function showProgrammingLangs(plan) {
//    let str = '';
//    const { programmingLangs } = plan.skills;
//    for (let key in programmingLangs) {
//       str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//    }
//    return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//    const fam = family.join(' ');
//    if (fam == '') {
//       return 'Семья пуста';
//    } else {
//       return `Семья состоит из: ${fam}`;
//    }
// }

// function showFamily(arr) {
//    let str = '';

//    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//    arr.forEach(name => {
//       str += `${name} `;
//    });

//    return str;
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//    arr.forEach(city => {
//       console.log(city.toLowerCase());
//    });

// }

// console.log(standardizeStrings(favoriteCities));


// const someString = 'This is some strange string';

// function reverse(str) {
//    if (typeof (str) !== 'string') {
//       return 'Ошибка!';
//    } else {
//       return str.split('').reverse().join('');
//    }
// }

// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//    let str = '';
//    arr.leitgh === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
//    arr.forEach(function (curr, i) {
//       if (curr !== missingCurr) {
//          str += `${curr}\n`;
//       }

//    });
//    return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'EUR'));


// let str = 'some';
// let strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));

// console.dir([1, 2, 3]);


// const soldier = {
//    healsh: 400,
//    armor: 100,
//    sayHello: function () {
//       console.log('Hello');
//    }
// };

// const john = Object.create(soldier);



// // const john = {
// //    health: 100
// // };

// // john.__proto__ = soldier;

// // Object.setPrototypeOf(john, soldier);

// john.sayHello();