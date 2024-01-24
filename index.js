class Person {
    constructor (name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    displayDetails(){
        return (this.name + " " + this.age + " " + this.country )
    }
}

const person1 = new Person ('David', 18, 'Kenya');
const person2 = new Person ('Mary', 25, 'USA');


console.log(person1);