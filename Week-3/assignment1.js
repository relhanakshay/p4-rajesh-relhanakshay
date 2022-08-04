function memoize(fn){

    const cache = new Map();
    return function (...args){
        const key = args.toString();
        console.log('fn is called with ' +key);
        console.log(cache);
        if (cache.has(key)){
        return cache.get(key);   
        }

        cache.set(key,fn(...args))
        return cache.get(key);
    }
}

function fib(n){
    if (n<2){
        return n;
    }
    return fib(n-1)+fib(n-2);
}

function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

const fibM = memoize(fib);

time(() => fibM(38));
time(() => fibM(40));
time(() => fibM(38));
time(() => fibM(40));
time(() => fibM(30));
time(() => fibM(32));
time(() => fibM(40));
time(() => fibM(38));
