const queue = () => {
    const q = [];
    const headIndex = 0;
    let tailIndex = 0;

    return {
        enqueue(item) {
            tailIndex++;
            return q.push(item)
        },
        dequeue() {
            if(q.length>0) {
                return q.shift();
            }
        },
        peek() {
            return q[headIndex];
        },
        last() {
            return q[tailIndex-1];
        },
        
        length() {
            return q.length;
        },
        isEmpty(){
            return q.length===0;
        },
        clear(){
            q.length = 0;
        }
    }
};

// usage
useQueue = queue();
useQueue.enqueue('a');
useQueue.enqueue('b');
useQueue.enqueue('c');
useQueue.enqueue(2);
//get length
console.log(useQueue.length());

console.log(useQueue.peek());
console.log(useQueue.last());
