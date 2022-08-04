function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log(); // What is logged? - Count is 0
// Count is 0 would be logged because when the 13th line is executed, count will have value equal to 0
// and message will have value as 'Count is 0' because count = 0 at that time.
// Now, when 15th, 16th and 17th lines are executed, they will increment the count to 3
// Now, when 18th line will be executed, it will basically call the log function from line 7th till 9th.
// Now, this log function is using 'message' variable, which was initialized in the starting only to - 'Count is 0'.
// Hence 'Count is 0' is logged in console.
// if we have logged 'count', then the console would display 3 as the result.
