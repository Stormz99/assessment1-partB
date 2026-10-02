function createCounter() {
  //Private variable
  let count = 0;

  function increment() {
    return ++count;
  }

  function decrement() {
    return --count;
  }

  return {
    increment: increment,
    decrement: decrement,

    get value() {
      return count;
    },
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value); // 1
console.log(counter.count); // undefined — not directly accessible
