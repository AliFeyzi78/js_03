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

const user = {
  userName: 'cılgınCocuk',
  userPass: 'ABC123',
  age: 15,
  //   login: function () {
  //     console.log(this.userName + ' logged in');
  //   },
  login() {
    console.log(this.userName + ' logged in');
  },
  newNickName(nick) {
    console.log(this.userName + ' changing Nickname to: ' + nick);
  },
};

// console.log(user.userName);
user.login();
user.newNickName('hacker çocuk');
