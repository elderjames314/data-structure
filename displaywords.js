function displayWords() {
    this.dataStore = [];
    this.add = add;
    this.dispayForward = dispayForward;
    this.dislayBackword = displayBackword;
}

function add(word) {
    this.dataStore.push(word);
}

function dispayForward() {
    return this.dataStore.reduce((a, b)=> a + b);
}

function displayBackword() {
    return this.dataStore.reduceRight((a, b)=> a + b);
}


let word = new displayWords();
word.add("James");
word.add("Oladimeji");
word.add("Monday");

console.log(word.dispayForward())
console.log(word.dislayBackword())

