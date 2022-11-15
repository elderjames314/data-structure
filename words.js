function myWords() {
    this.dataStore = [];
    this.add = add;
    this.display = display;
}

function add(str) {
    this.dataStore.push(str)
}

function display() {
    return this.dataStore.reduce((a, b) => a + b);
}

let word = new myWords();
word.add('w');
word.add('o');
word.add('r');
word.add('d');

console.log(word.display())

