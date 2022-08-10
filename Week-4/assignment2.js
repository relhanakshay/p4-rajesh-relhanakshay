var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

function Teacher(name, age) {}

Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

// Object.setPrototypeOf(Teacher, Person);
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

var him = new Teacher();

console.log(Object.getPrototypeOf(Teacher));
console.log(Object.getPrototypeOf(him));

// console.log(him);

him.initialize("Adam", 45);
him.teach("Inheritance");
