/* eslint-disable linebreak-style */
// /* eslint-disable linebreak-style */
// document.write('Hello\n<br>');
// document.write('clarusway');
// console.log('Hello\n');
// console.log('cw');
// alert('hello\n clarusway');
// confirm('hello');
// prompt('yaşınızı girin', 17);

// document.body.innerHTML = '<h1> Clarusway Rocks </h1>';
// // document.head.innerHTML = '<title>cw</title>';

// console.trace();
// console.time();
// console.log('log');
// console.error('error');
// console.warn('warn');
// console.info('info');
// console.timeEnd();

// var contry = prompt('enter your contry: ');
// alert('you are from ' + country);

// console.log('outside');

// var a = 3;

// console.log({ a });

// a = 4;
// var b;
// console.log(b);
// b = 4;
// console.log([b]);

// console.log(a);

// var a = 3;

// ***********IF Statement*******
// **********while  Statement ********

// let i = 0;
// let sum = 0;
// while (i < 9) {
//   sum += i;
//   // eslint-disable-next-line no-plusplus
//   i++;
// }
// console.log(`yapılan işlemin sonucu: ${sum}'dır`);

// ************for Statement *************
// let best = ['ali', 'veli', '49', '50'];

// for (let i = 0; i < best.length; i++) {
//   console.log(`${i + 1} : ${best[i]}`);
// }

// let text = 'clarusway';

// for (let i = 0; i < text.length; i++) {
//   console.log(text[i]);
// }

// for (let i = 0, j = 10; i < text.length; i++, j--) {
//   console.log(text[i]);
// }

// for (let i = 0; i <= 10; i++) {
//   for (let j = 0; j <= 10; j++) {
//     document.write(`${i}*${j}=${i * j}<br>`);
//   }
//   document.write('<br>');
// }

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   if (number % 2 === 0) sum += numbers[i];
// }

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   sum += number % 2 === 0 ? number : null;
// }
// console.log(sum);

// const fnumber = Number(prompt('bir rakam giriniz: '));
// let result = 1;
// for (let i = fnumber; i > 0; i--) result *= i;
// console.log(result);

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} FizzBuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} Buzz`);
//   } else {
//     console.log(`${i}`);
//   }
// }

// const x = 4;
// console.log(`${x} is an ${(x % 2 === 0 && 'even') || 'odd'} number`);

// for (let i = 1; i <= 100; i++) {
//   console.log(
//     `${i} ${(i % 3 === 0 && 'Fizz') || ''} ${(i % 5 === 0 && 'Buzz') || ''}`
//   );
// }

// let x = Math.trunc(Math.random() * 20);  //1-20 arası random sayı üretir.
// console.log(x);

// let randomnumber = 0;
// while (randomnumber !== 6) {
//   randomnumber = Math.trunc(Math.random() * 6) + 1;
//   console.log(`Random num is ${randomnumber}`);
// }

// ***FUNCTIONS***
// let sum;

// function pascalSum1(n) {
//   return (n * (n + 1)) / 2;
// }

// function pascalSum2(n) {
//   //with loop
//   let sum = 0;
//   while (n >= 0) {
//     sum += n;
//     n--;
//   }
//   return sum;
// }

// function pascalSum3(n) {
//   //with recursive
//   //ilk önce nerede bitireceğimizi ilan edeceğiz
//   if (n === 1) return 1;
//   return n + pascalSum3(n - 1);
// }

// console.log(pascalSum3(3), pascalSum2(5), pascalSum1(5));
// console.log();

// ARROW FUNCTION

// const mult = (n1, n2) => n1 * n2;

// console.log(mult(3, 4));

// let greet = (username) => `Wellcome ${username}`;
// console.log(greet('ali'));

// const goodMorning = () => 'Good Morning';
// console.log(goodMorning());

// const factorial = (num) => {
//   let r = 1;
//   for (let i = 1; i <= num; i++) {
//     r *= i;
//   }
//   return r;
// };

// console.log(factorial(6));

// const greet = (username = 'Student') => `Wellcome ${username}`;
// console.log(greet('ali'));

// ((item) => item * 2)(16);

// function sumAll(rr, ...args) {
//   let sum = 0;
//   for (let i = 0; i <= args.length; i++) {
//     sum += parseInt(rr);
//   }
//   return sum;
// }

// console.log(sumAll(1, 2, 3, 4, 5, 6));

// FUNCTIONS
// let myNum1 = 'Merhaba';
// let myNum2 = 'Nasılsın';
// console.log(myNum1, myNum2);

// function sumNumber() {
//   myNum1 = myNum1.toUpperCase();
//   myNum2 = myNum2.toUpperCase();
//   // return console.log(result);
// }
// console.log(myNum1, myNum2);

// sumNumber();

// console.log(myNum1, myNum2);
// function toUpper(a, b) {
//   const ab = a.toUpperCase() + ' ' + b.toUpperCase();
//   return ab;
// }
// console.log(toUpper('ali', 'veli'));

// function checkNumbers() {
//   for (let i = 0; i < 10; i++) {
//     if (i === 5) return;

//     console.log('i:', i);
//   }
//   console.log('END');
// }
// checkNumbers();

//Normal FUNCTION

// myFunction_1(); //Hoisting
//myFunction_2();  //No Hoisting

// function myFunction_1() {
//   console.log('myFunction_1');
// }

// myFunction_1();
// Function Expressions

// const myFunction_2 = function () {
//   console.log('myFunction_2');
// };
// myFunction_2();

//Arrow Function

// const myFunction_3 = (p1) => p1 ** 2;

// const myFunction_4 = () => {
//   console.log('Merhaba');
// };

// console.log('myFunction_3');
// console.log(myFunction_3(3));
// myFunction_4();

// IIFE (Immediately Invokeable Function Expressions)

// (function (a) {
//   console.log('Karesi:', a ** 2);
// })(2);

// (() => {
//   console.log('IIFE!');
// })();

/// Objects  ---- Class

{
  // const phone = {
  //   camera: 12,
  //   model: 'miT9',
  //   memory: '4Gb',
  //   price: 2000,
  // };
  // const user = {
  //   userName: 'Ali',
  //   userSurname: 'Feyzi',
  //   age: 42,
  //   isMember: true,
  // };
  // console.log(user.userName);
  // console.log(user['userName']);
  // const propName = 'age';
  // console.log(user.propName);
  // console.log(user[propName]);
}

// const user = {
//   userName: 'cılgınCocuk',
//   userPass: 'ABC123',
//   age: 15,
//   //   login: function () {
//   //     console.log(this.userName + ' logged in');
//   //   },
//   login() {
//     console.log(this.userName + ' logged in');
//   },
//   newNickName(nick) {
//     console.log(this.userName + ' changing Nickname to: ' + nick);
//   },
// };

// // console.log(user.userName);
// user.login();
// user.newNickName('hacker çocuk');

// const user = {
//   userName: '',
//   userPass: '',
//   age: 0,
//   login() {
//     console.log(this.userName + ' logged in');
//   },
//   newNickName(nick) {
//     this.userName = nick;
//   },
// };

// //ARRAY OF OBJECT
{
  // const userArray = [];
  // const myUser1 = user;
  // const myUser2 = user;
  // myUser1.userName = 'Ayşe';
  // myUser1.userPass = 1234;
  // myUser1.age = 22;
  // console.log(myUser1);
  // myUser2.userName = 'ddddd';
  // myUser2.userPass = 'dfsgsg';
  // myUser2.age = 26;
  // console.log(myUser2);
  // userArray.push(myUser1);
  // userArray.push(myUser2);
  // console.log(userArray);
}

// CLASS

// const user = {
//   userName: '',
//   userPass: '',
//   age: 0,
//   login() {
//     console.log(this.userName + ' logged in');
//   },
//   newNickName(nick) {
//     this.userName = nick;
//   },
// };

// class User {
//   constructor(param) {
//     this.userName = param.name;
//     this.userPassword = param.password;
//     this.userAge = param.age;
//     this.userCity = param.city;
//   }

//   login() {
//     console.log(this.userName + ' logged in!');
//   }
// }

// const myUser_1 = new User({
//   name: 'Ali',
//   password: 1234,
//   age: 23,
//   city: 'izmir',
// });
// const myUser_2 = new User({
//   name: 'Veli',
//   password: 'qwerr',
//   age: 33,
//   city: 'ankara',
// });

// console.log(myUser_1);
// console.log(myUser_2);

// myUser_1.login();
// myUser_2.login();

// DOM

// const element = document.getElementById('user_name');
// console.log(element);

// const elements = document.getElementsByClassName('usertag');
// console.log(elements);

// const elements = document.getElementsByTagName('p');
// console.log(elements);

//...document.querySelector()

// const element = document.querySelector('#user_name');
// console.log(element);

// const elements = document.querySelectorAll('.usertag');
// console.log(elements);

// const elementp = document.querySelectorAll('p');
// console.log(elementp);

// const list = document.querySelector('#city_list');

// const element_1 = document.getElementsByClassName('city');
// const element_2 = document.querySelectorAll('.city');

// console.log(list);
// console.log(element_1);
// console.log(element_2);

// list.innerHTML += '<li class="city">Malatya</li>';
// console.log(element_1);
// console.log(element_2);

//====================================

// const elem = document.querySelector('#my_element');
// elem.innerHTML = '<p>Hello!</p>';
// elem.innerText = 'Merhaba';

//🆚

// const car_list = [
//   { id: 0, brandName: 'Mercedes' },
//   { id: 1, brandName: 'Kia' },
//   { id: 2, brandName: 'BMW' },
//   { id: 3, brandName: 'Opel' },
// ];

// const listElement = document.querySelector('#cars');

// car_list.forEach((car) => {
//   listElement.innerHTML += `<li class="car_class">${car.brandName}</li>`;
// });

//⭐⭐⭐⭐⭐⭐⭐⭐SET - GET attribute

// const element = document.querySelector('#link');
// console.log(element);

// const attr = element.getAttribute('href');
// console.log(attr);

// element.setAttribute('href', 'http://www.clarusway.com');
// element.innerText = 'go to Claruway';

//exp

// const elements = document.querySelectorAll('li');
// elements.forEach((w) => {
//   if (w.innerText.includes('error')) {
//     w.setAttribute('class', 'error');
//   } else if (w.innerText.includes('success')) {
//     w.setAttribute('class', 'success');
//   }
// });

//exp

// const element = document.querySelector('.hello');
// element.style.fontWeight = 'bold';

//exp
// const element = document.querySelector('#my_banner');
// console.log(element.classList);

// element.classList.add('active');
// console.log(element.classList);

//exp
// const element = document.querySelector('#today');
// const my_element = document.createElement('p');
// my_element.innerHTML = 'Perşembe';
// element.appendChild(my_element);

//exp

// document.querySelector('#btn').addEventListener('click', clickFunction);

// function clickFunction() {
//   document.querySelector('#para').innerText;
// }

//ITERaTORs

//FOREACH

// const numbers = [1, 2, 3, 5, 44, 4, 77, 445, 7];

// numbers.forEach((x) => {
//   console.log(x);
// });

// numbers.forEach(getnum);

// function getnum(x) {
//   console.log('number:' + x);
// }

//MAP

// const newNumb = numbers.map((x) => {
//   return x * 2;
// });

// console.log(newNumb);

//FIND
// const users = [
//   { id: 0, name: 'ali', age: 22 },
//   { id: 1, name: 'veli', age: 26 },
//   { id: 2, name: 'ayşe', age: 24 },
//   { id: 3, name: 'aslı', age: 23 },
// ];

// const myUser = users.find((user) => user.age === 22);

// console.log(myUser.name);

// FILTER
// const users = [
//   { id: 0, name: 'ali', age: 22 },
//   { id: 1, name: 'veli', age: 26 },
//   { id: 2, name: 'ayşe', age: 24 },
//   { id: 3, name: 'aslı', age: 23 },
// ];

// const myUser = users.filter((x) => x.age < 24);
// console.log(myUser.name);

//map vs forEach

// const ageArray_1 = [];
// users.forEach((x) => {
//   ageArray_1.push(x.age * 2);
// });
// console.log(ageArray_1);

// const ageArray_2 = users.map((x) => x.age * 2);
// console.log(ageArray_2);

//REDUCE

// const myArray = [1, 3, 5, 66, 7, 8, 33];

// const sum = myArray.reduce((acc, curr) => {
//   console.log(acc, curr);
//   return acc + curr;
// });

// console.log(sum);

// const big = myArray.reduce((acc, curr) => {
//   return acc > curr ? acc : curr;
// });
// console.log(big);

// EVERY , SOME

// const users = [
//   { id: 0, isOld: true, name: 'ali', age: 22 },
//   { id: 1, isOld: false, name: 'veli', age: 26 },
//   { id: 2, isOld: true, name: 'ayşe', age: 24 },
//   { id: 3, isOld: true, name: 'aslı', age: 23 },
// ];

// console.log(users.every((x) => x.isOld === true));
// console.log(users.some((x) => x.isOld === true));

//for..in vs for..of

// const user = {
//   id: 0,
//   isOld: true,
//   name: 'ali',
//   age: 22,
// };

// for (x in user) {
//   console.log(x, user[x]);
// }

// const users = [
//   { id: 0, isOld: true, name: 'ali', age: 22 },
//   { id: 1, isOld: false, name: 'veli', age: 26 },
//   { id: 2, isOld: true, name: 'ayşe', age: 24 },
//   { id: 3, isOld: true, name: 'aslı', age: 23 },
// ];

// for (x of users) {
//   console.log(x);
// }

// for (y of user) {
//   console.log(y);
// }
