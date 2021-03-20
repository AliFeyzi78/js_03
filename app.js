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

let randomnumber = 0;
while (randomnumber !== 6) {
  randomnumber = Math.trunc(Math.random() * 6) + 1;
  console.log(`Random num is ${randomnumber}`);
}
