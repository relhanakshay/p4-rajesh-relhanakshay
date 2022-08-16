class MyPromise {
  constructor(executor) {
    if (typeof executor != "function") {
      throw new Error(`Promise resolver should be a function`);
    }

    this.resolvedData = void 0;
    this.rejectedData = void 0;

    this.isResolved = false;
    this.isRejected = false;

    this.resolveChain = [];
    this.rejectChain = [];

    const resolve = (value) => {
      this.isResolved = true;
      this.resolvedData = value;

      if (this.resolveChain.length) {
        this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
      }
    };

    const reject = (reason) => {
      this.isRejected = true;
      this.rejectedData = reason;

      if (this.rejectChain.length) {
        this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
      }
    };

    // try {
    //   executor(resolve, reject);
    // } catch (error) {
    //   reject(error);
    // }

    executor(resolve, reject);
  }

  then(fn) {
    this.resolveChain.push(fn);
    if (this.isResolved) {
      this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
    }
    return this;
  }

  catch(fn) {
    this.rejectChain.push(fn);
    if (this.isRejected) {
      this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
    }
    return this;
  }

  finally(fn) {
    this.resolveChain.push(fn);
    this.rejectChain.push(fn);

    if (this.isResolved) {
      this.resolveChain.reduce((acc, fn) => fn(acc), this.resolvedData);
    }

    if (this.isRejected) {
      this.rejectChain.reduce((acc, fn) => fn(acc), this.rejectedData);
    }
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    let random = Math.random() * 1000;
    if (random % 5 === 0) {
      console.log(random);
      reject("Thats what she said");
    } else {
      console.log(random);
      resolve(10);
    }
  }, 1000);
})
  .then((data) => {
    return data * 2;
  })
  .then((data) => {
    return data * 2;
  })
  .catch((err) => {
    return `${err}`;
  })
  .catch((err) => {
    return err;
  })
  .finally((data) => {
    console.log(data);
  });
