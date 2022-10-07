let noOfNum = prompt("How many numbers in input array?");
let array = [],
  max,
  min,
  minMax;

for (let i = 0; i < noOfNum; i++) {
  array.push(prompt("Enter number."));
}

for (let i = 0; i < noOfNum; i++) {
  if (i == 0) {
    max = array[i];
    min = array[i];
    continue;
  }
  if (array[i] > max) {
    max = array[i];
  }
  if (array[i] < min) {
    min = array[i];
  }
}

minMax = [min, max];
console.log(minMax);
