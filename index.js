function receivesAFunction(func) {
  func();
}

function returnsANamedFunction() {
  let func = x => x;
  return func;
}

function returnsAnAnonymousFunction () {
  return function() {

  }
}