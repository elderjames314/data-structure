function weekTemp () {
    this.dataStore = [];
    this.add = add;
    this.average = average
}

function add (value) {
    this.dataStore.push(value)
}

function average() {
    let total = 0;
    for(let i = 0; i < this.dataStore.length; i++) {
        total = 0;
        for(let j = 0; j < this.dataStore[i].length; j++) {
            total +=  this.dataStore[i][j];
        }
        console.log("month: "+ i + ", average: "+ total/this.dataStore[i].length)
    }
    return total/this.dataStore.length;
}

let week = new weekTemp();
week.add([23, 45, 23, 23, 56]);
week.add([12, 67, 43, 2, 32]);
week.add([435, 32, 2, 32, 23, 32]);
week.add([43, 43, 42, 42, 342, 4, 24]);
console.log(week.average())