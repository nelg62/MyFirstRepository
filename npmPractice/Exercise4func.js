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

// exports.addFun = addFun;
// exports.minusFun = minusFun;
// exports.divideFun = divideFun;
// exports.timesFun = timesFun;
  
 module.exports = {
    addFun,
    minusFun,
    divideFun,
    timesFun,
 };
