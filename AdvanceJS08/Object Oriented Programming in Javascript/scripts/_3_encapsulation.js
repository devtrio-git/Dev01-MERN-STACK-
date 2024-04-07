// Data Hiding is Abstraction...
// Data Binding is Encapsulatoin.... 


class Student {
    #name;
    #roll;
    #department;

    constructor(n, r, d) {
        this.#name = n;
        this.#roll = r;
        this.#department = d;
    }

    getDetails() {
        console.log('Student', this.#name, this.#department, this.#roll);
    }

    getName() {
        return this.#name;
    }

    setName(n) {
        this.#name = n;
    }
}
let s = new Student('owais', 23, 'CS');
s.getDetails();
s.setName("Ashar");
console.log(s.getName()); 