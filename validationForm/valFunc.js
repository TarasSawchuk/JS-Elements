"use strict";

 function valFunc() {
      let number,
          result;
      
      number = document.getElementById('number').value;
      
isNaN(number) || number < 1 || number > 10 ? result = 'Incorrect number' : result = 'Correct number';
      document.getElementById('result').innerHTML = result;
  }