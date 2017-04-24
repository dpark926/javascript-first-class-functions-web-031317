function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  var happy = function() {
  }

  return happy
}

function returnsAnAnonymousFunction() {
  return function() {}
}
