function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

