class Queue {
    constructor() {
        this.store = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(item) {
        this.store[this.tail] = item;
        this.tail++;
    }

    dequeue() {
        if (this.size() <= 0) return undefined;
        let item = this.store[this.head];
        delete this.store[this.head];
        this.head++;
        if (this.head === this.tail) {
            this.head = 0;
            this.tail = 0;
        }
        return item;
    }

    isEmpty() {
        return (this.tail - this.head === 0);
    }

    size() {
        return this.tail - this.head;
    }

    first() {

    }

    last() {

    }

    peek() {
        return this.store[this.tail - 1];
    }
    clear() {

    }
    print() {
        let result = [];
        for (let key in this.store) {
            result.push(this.store[key]);
        }
        return result;
    }
}

// https://medium.com/@mayashavin/ds-queue-implementation-in-js-21ea5914c428
// https://www.nickang.com/implementing-queue-javascript/