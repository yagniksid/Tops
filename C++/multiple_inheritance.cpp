#include<iostream>
using namespace std;


class Person {
protected:
    string name;
    int age;
public:
    void inputdata() {
        cout << "Enter name: ";
        cin >> name;
        cout << "Enter age: ";
        cin >> age;
    }
};


class Student : public Person {
protected:
    float percentage;
public:
    void inputdata() {
        Person::inputdata();
        cout << "Enter percentage: ";
        cin >> percentage;
    }
    void displaydata() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Percentage: " << percentage << endl;
    }
};


class Teacher : public Person {
protected:
    float salary;
public:
    void inputdata() {
        Person::inputdata();
        cout << "Enter salary: ";
        cin >> salary;
    }
    void displaydata() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Salary: " << salary << endl;
    }
};

int main() {
    Student s;
    s.inputdata();
    s.displaydata();

    Teacher t;
    t.inputdata();
    t.displaydata();
    
    return 0;
}
