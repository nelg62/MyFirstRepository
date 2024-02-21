function addFun(a, b) {
  console.log(a + b);
}

function minusFun(a, b) {
  console.log(a - b);
}

function divideFun(a, b) {
  console.log(a / b);
}

function timesFun(a, b) {
  console.log(a * b);
}

function personName(name) {
  console.log(`Hello ${name}`);
}

const myArray = ['apple', 'car', 'tree', 'pig', 'watermelon']
myArray.splice(0, 1, 'monkey')
myArray.splice(3,1, 'Porcupine')
myArray.unshift('cabbage')
myArray.pop()

let object1 = myArray[0]
let object2 = myArray[3]

myArray[0] = object2

myArray[3] = object1


console.log(myArray)

addFun(5, 5);

minusFun(5, 5);

divideFun(5, 5);

timesFun(5, 5);

personName("Glen");

console.debug("debug message");

console.info("info message");

console.warn("warning message");

console.error("error message");
