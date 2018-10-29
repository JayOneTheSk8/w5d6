function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);
Function.prototype.myBadBind = function (ctx) {
  console.log(arguments);
  const bindArgs = Object.values(arguments).slice(1);
  const that = this;
  return function() {
    const calledArgs = Object.values(arguments);
    that.apply(ctx, bindArgs.concat(calledArgs));
  };
};

Function.prototype.myBind = function (ctx, ...args) {
  return (...calledArgs) => {
    this.apply(ctx, args.concat(calledArgs));
  };
};


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
//
// markov.says.myBind(pavlov, "meow", "Kush")();
//
// markov.says.myBind(pavlov)("meow", "a tree");
//
// markov.says.myBind(pavlov, "meow")("Markov");
//
// const notMarkovSays = markov.says.myBind(pavlov);
//
// notMarkovSays("meow", "me");
