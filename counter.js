class Counter {
    constructor(func) {
        this.counter = 0;
        this.callback = func;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 2 === 0 && this.callback) {
            console.log(this.callback(this.counter));
        }
    }
}

function isEven(num) {
    return `${num}은 짝수입니다!`;
}


const counterEven = new Counter(isEven);

counterEven.increase();
counterEven.increase();
counterEven.increase();
counterEven.increase();
counterEven.increase();
counterEven.increase();