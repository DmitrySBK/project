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