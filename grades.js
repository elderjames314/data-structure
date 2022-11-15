function studentGrade() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(grade) {
    this.dataStore.push(grade)
}

function average() {
    let total =0;
    for(let i = 0; i < this.dataStore.length; i++) {
        total += this.dataStore[i];
    }
    const average = total / this.dataStore.length;
    return average.toFixed(2);
}


let grade = new studentGrade();
grade.add(89);
grade.add(23);
grade.add(45);
grade.add(67);
grade.add(56);
grade.add(90);

console.log(grade.average())
