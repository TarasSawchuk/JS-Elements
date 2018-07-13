"use strict";

var date = new Date();
	text = "Рік зарас - " + date.getFullYear();
	text += "\nМісяць - " + date.getMonth();
	text += "\nДень - " + date.getDate();
	text += "\nЧас - " + date.getHours() + ":" + date.getMinutes();
	console.log(text);