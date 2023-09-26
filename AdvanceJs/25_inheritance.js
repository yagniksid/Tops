class Teacher {
    login() {
        console.log("----login-----");
    }
    salary() {
        console.log("----salary----");
    }
}
class Student {
    login() {
        console.log("----login-----");
    }
    fees() {
        console.log("----fees----");
    }
}
const TECh = new Teacher();
TECh.login()
TECh.salary()

const STD = new Student()
STD.login()
STD.fees()
