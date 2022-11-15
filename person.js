class Person {
    static data = new Array();
    constructor(name, grade, gender) {
        this.name = name;
        this.grade = grade;
        this.gender = gender;
        Person.data.push(this)
    }
    static getPersonOfTheSameGender(gender) {
        return this.data.filter(a => a.gender==gender)
    }
}

const person = new Person("James", 45, "F");

const person2 = new Person("Dimeji", 89, "F");

const person1 = new Person("Oladimeji", 78, "M");


const list = Person.data;
console.log(Person.getPersonOfTheSameGender("M"));
