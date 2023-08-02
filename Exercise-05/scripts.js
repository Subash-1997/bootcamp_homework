function tellFortune(jobTitle, geoLocation, partner, numKids) {
  var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
 partner + ' ' + ' with ' + numKids + ' kids.';
  console.log(future);
}

tellFortune('John player', 'spain', 'Angel', 3);
tellFortune('Charles', 'Japan', 'Cindrella', 2);
tellFortune('Louis impersonator', 'Russia', 'Marry', 1);

function calculateDogAge(age) {
  var dogYears = 7*age;
  console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);

/*---------- The Lifetime Supply Calculator ----------*/
function calculateSupply(age, numPerDay) {
  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
  console.log(message);
}

calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);


function calcGeometry(radius) {
  var circumference = Math.PI * 2*radius;
  console.log("The circumference is " + circumference);
  var area = Math.PI * radius*radius;
  console.log("The area is " + area);
}
// Temperature
function celsiusToFahrenheit(celsius) {
  var celsiusInF = (celsius*9)/5 + 32;
  console.log(celsius + '°C is ' + celsiusInF + '°F');
}

function fahrenheitToCelsius(fahrenheit) {
  var fahrenheitInC = ((fahrenheit - 32)*5)/9;
  console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
}