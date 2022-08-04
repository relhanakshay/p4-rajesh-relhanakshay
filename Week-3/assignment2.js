//! Apply

var numbers = [2, 3, 8, 5, 1];

var max = Math.max.apply(null, numbers);

console.log("Max number is ", max);

var min = Math.min.apply(null, numbers);

console.log("Min number is ", min);

//! Call

function greet() {
  var dummy = [this.human, "stands at", this.height].join(" ");

  console.log(dummy);
}

var humans = {
  human: "Avesh",
  height: "6 ft tall",
};

greet.call(humans);

//! Bind

var module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

var fn = module.getX.bind(module);

console.log(fn());
