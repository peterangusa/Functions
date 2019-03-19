const age =(date, month,year) => {

var date = "01 01 1990";
var currentYear = 2019;
var age = currentYear - date.split(" ") [2];
console.log(age + " years old");
return age;
}
age("07 06 1992");
