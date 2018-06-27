function User(name, seName, years) {
  this.name = name;
  this.seName = seName;
  this.years = years;
  this.canMail = true;
  this.sayHello = function() {
    alert( "Привіт світ! Я " + this.name + " " + this.seName + " мені " + this.years + " років.");
  };
}

var date = new Date();
	text = "Рік зарас - " + date.getFullYear();
	text += "\nМісяць - " + date.getMonth();
	text += "\nДень - " + date.getDate();
	text += "\nЧас - " + date.getHours() + ":" + date.getMinutes();
	console.log(text);
	