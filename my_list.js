function List() {
    this.dataStore = [];
    this.insertHigher  = insertHigher;
}

List.prototype.display = function () {
    console.log(this.dataStore)
}

function insertHigher(value) {
    if(this.dataStore.length == 0) this.dataStore.push(value);
    for(let i = 0; i < this.dataStore.length; i++) {
        if(!isNaN(this.dataStore[i]) && !isNaN(value)) {
            if(value > this.dataStore[i]) {
                this.dataStore.push(value)
                return;
            }
        }
        if(isNaN(this.dataStore[i]) && isNaN(value)) {
            if(value > this.dataStore[i]) {
                this.dataStore.push(value)
                return;
            }
        }

    }

}

let list = new List();
const list2 = new List();
list2.insertHigher('c');
list2.insertHigher('d');
list2.insertHigher('a');

list.insertHigher(4);
list.insertHigher(3);
list.insertHigher(5);
list.insertHigher(2);
list.insertHigher(6);


console.log(list.dataStore)
list2.display()