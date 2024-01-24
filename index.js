class Person {
    constructor (name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails(){
        return this.name + " " + this.age + " " + this.country;
    }
}

const person1 = new Person('David', 18, 'Kenya');
const person2 = new Person('Mary', 25, 'USA');


console.log(person1.displayDetails());

class Rectangle {
    constructor (width, height, length){
        this.height = height;
        this.width = width;
        this.length = length;
    }

    calculateArea(){
        return this.length * this.width * this.height;
    }

    calculatePerimeter(){
        return 2 * (this.length + this.width);
    }
}

const rectangle1 = new Rectangle(2, 4, 6);


console.log(rectangle1.calculateArea());
console.log(rectangle1.calculatePerimeter());