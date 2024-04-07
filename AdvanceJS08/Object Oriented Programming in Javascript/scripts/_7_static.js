// Static variables are shared among all instances of the class 
// and can be accessed without creating an instance of the class


class Person {
    static count = 0;
    constructor(n){
        this.name = n;
        Person.count++;
    }

    static getCount(){
        return Person.count;
    }

   
}


const p = new Person('abdul')
const p2 = new Person('abdul')
const p23 = new Person('abdul')

console.log(Person.count); 
console.log(Person.getCount()); 