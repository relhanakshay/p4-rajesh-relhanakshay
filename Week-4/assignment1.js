class MyPromise {
  constructor(executor) {
    if (typeof executor != "function") {
      throw new Error(`Promise resolver should be a function`);
    }

    this.resolvedData = void 0;
    this.isResolved = false;
    this.resolveChain = [];

    const resolve = (value) => {
      this.isResolved = true;
      this.resolvedData = value;

      if (this.resolveChain.length) {
        this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
      }
    };

    // const reject = (reason) => {
    //   this.state = REJECTED;
    //   this.value = value;
    // };

    // try {
    //   executor(resolve, reject);
    // } catch (error) {
    //   reject(error);
    // }

    executor(resolve);
  }

  then(fn) {
    this.resolveChain.push(fn);
    if (this.isResolved) {
      this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
    }
    return this;
  }
}

new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
})
  .then((data) => {
    return data * 2;
  })
  .then((data) => {
    console.log(data);
  });
