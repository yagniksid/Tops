class Commomclass {
    constructor(obj) {
        this.salaryAmount = obj.salary
        this.feesAmount = obj.fees
    }
    login() {
        console.log("----login-----");
    }
}



class Teacher extends Commomclass {
    constructor(obj, per) {
        super(obj)
        this.incrementper = per
    }
    salary() {
        console.log("Teacher salary----", this.salaryAmount);
    }
    incrementsalary() {
        const salary = this.salaryAmount * (this.incrementper / 100)
        console.log(`my salary will be ${salary + this.salaryAmount} after 1 year`);
    }
}
class Student extends Commomclass {
    fees() {
        console.log("Student fees----", this.feesAmount);
    }
}

let obj = {
    fees: 50000,
    salary: 30000
}

const TECh = new Teacher(obj, 20);
// TECh.login()
TECh.salary()
// TECh.incrementsalary()

const STD = new Student(obj)
// STD.login()
STD.fees()

