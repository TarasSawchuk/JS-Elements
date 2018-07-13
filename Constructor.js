"use strict";

function User(name, seName, years) {
	this.name = name;
	this.seName = seName;
	this.years = years;
	this.canMail = true;
	this.sayHello = function() {
		alert( "Привіт світ! Я " + this.name + " " + this.seName + " мені " + this.years + " років.");
  };
}
