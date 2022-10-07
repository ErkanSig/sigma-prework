let givenDate = new Date(prompt("Enter date in the form mm/dd/yyyy:"));
var date = new Date();
var dateDifference = date.getTime() - givenDate.getTime();
var days = Math.floor(dateDifference / (1000 * 3600 * 24));

if (days > 0) {
  console.log(`It has been ${days} days since ${givenDate}.`);
} else {
  days = Math.abs(days);
  console.log(`In ${days} days it will be ${givenDate}.`);
}
