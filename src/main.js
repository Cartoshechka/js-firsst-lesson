console.log('JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних');
console.log('Hello World!');
/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної: myObj, значення: first: 'First Name', last: 'Last Name'

global.myNum = 10;
global.myStr = 'some string';
global.myBool = true;
global.myArr = [1, 2, 3, 4, 5];
global.myObj = { first: 'First Name', last: 'Last Name' };

console.log('myNum =', global.myNum);
console.log('myStr =', global.myStr);
console.log('myBool =', global.myBool);
console.log('myArr =', global.myArr);
console.log('myObj =', global.myObj);

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

global.decimal2 = global.myNum.toFixed(2);
console.log('decimal2 =', global.decimal2);

/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запищіть в цю ж саму змінну.
 */

global.myBigInt = 123n;
console.log('myBigInt =', global.myBigInt);
global.myBigInt = global.myBigInt + 1n;
console.log('myBigInt + 1 =', global.myBigInt);