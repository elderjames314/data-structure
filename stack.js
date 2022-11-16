function Stack() {
    this.top = 0;
    this.dataStore = [];
    this.peek = peek;
    this.pop = pop;
    this.push =push;
    this.length=this.top;
    this.clear=clear;
}

function push(element) {
    this.dataStore[this.top++] = element;
}
function peek() {
    return this.dataStore[this.top-1];
}
function pop() {
    return this.dataStore[this.top--];
}
function clear() {
    this.dataStore.length = 0;
}

stack = new Stack();
stack.push(2);
stack.push(45);

console.log(stack.dataStore)