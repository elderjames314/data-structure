function List() {
    this.dataStore = [];
    this.append = append;
    this.listSize = 0;
    this.find = find;
    this.remove = remove;
    this.length = length;
    this.toString = toString;
    this.insert = insert;
    this.pos = 0;
    this.clear = clear;
    this.contains = contains;
}


function append(element) {
    this.dataStore[this.listSize++] = element;
}
function find(element) {
    for(let i = 0;  i< this.dataStore.length; i++) {
        if(this.dataStore[i] == element) return i;
    }
    return -1;
}
function remove(element) {
    let pos = this.find(element);
    if(pos > -1) {
        this.dataStore.splice(pos, 1);
        --this.listSize;
        return true;
    }
    return false;
}
function length() {
    return this.listSize;
}
function toString() {
    return this.dataStore;
}
function insert(element, after) {
    let pos = this.find(after);
    if(pos > -1) {
        this.dataStore.splice(pos+1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
 }
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
function contains(element) {
    for(let i = 0; i< this.dataStore.length; i++) {
        if(this.dataStore[i] ==  element) return true;
    }
    return false;
}

let list = new List();
list.append("James");
list.append("Oladimeji");
list.insert("Oladiemji")

console.log(list.toString());