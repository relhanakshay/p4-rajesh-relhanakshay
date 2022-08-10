function createStack() {
  var obj = {
    items: [],
  };
  return {
    //items: [],
    push(item) {
      obj.items.push(item);
    },
    pop() {
      return obj.items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
console.log(stack.items); // => [10]
//stack.items = [10, 100, 1000]; // Encapsulation broken;
