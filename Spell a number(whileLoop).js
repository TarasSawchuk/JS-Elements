// My simple loop for guessing a number

let name = prompt("Привіт, як тебе звати?")

alert(name + ", я загадав число від 1 до 10. Спробуй відгадати за мінімальну кількість спроб. Після кожної спроби я скажу 'мало', 'багато' або 'вгадав'.");

let number = 6;
let guess = prompt("Яке число я загадав?");
let numberGuesses = 0;

while (guess != number) {
  if (guess > number) {
    guess = prompt("Багато");
    numberGuesses = numberGuesses + 1;
  }
  if (guess < number) {
    guess = prompt("Мало");
    numberGuesses = numberGuesses + 1;
  }
};
alert("Вітаю " + name + " ти відгадав число, це "+ guess + "! Тобі знадобилось " + numberGuesses + " спроби." );