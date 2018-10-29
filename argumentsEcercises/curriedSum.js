function curriedSum(numArgs) {
  const numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce( (acc, el) => { return acc += el; } );
    } else {
      return _curriedSum;
    }
  };
}

let x = curriedSum(4);
console.log(x(5)(30)(20)(1));

Function.prototype.curry = function (numArgs) {
  const args = [];
  const that = this;
  return function _collect(arg) {
    args.push(arg);
    if (args.length < numArgs) {
      return _collect;
    } else {
      return that.apply(that, args); //can also do that(...args)
    }
  };
};

// with fat arrow
Function.prototype.curry = function (numArgs) {
  const args = [];
  const _collect = (arg) => {
    args.push(arg);
    if (args.length < numArgs) {
      return _collect;
    } else {
      return this.apply(this, args);
    }
  };
  return _collect;
};

const add = (...args) => args.reduce( (acc, el) => acc += el);
