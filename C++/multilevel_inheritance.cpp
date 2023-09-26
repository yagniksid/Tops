#include<iostream>
using namespace std;


class Student
 {

public:
	
	int rollnumber;
	
    void inputrollnumber()
	{
        cout << "Enter roll number: ";
        cin >> rollnumber;
    }
};


class Test : public Student {
protected:
    float subject1marks, subject2marks;
public:
    void inputmarks() {
        cout << "Enter marks for subject 1: ";
        cin >> subject1marks;
        cout << "Enter marks for subject 2: ";
        cin >> subject2marks;
    }
};


class Result : public Test 
{
	float totalmarks;
	
public:
	
    void calculatetotalmarks() 
	{
        totalmarks = subject1marks + subject2marks;
    }
    
	void displaydata() 
	{
        cout << "Roll number: " << rollnumber << endl;
        cout << "Subject 1 marks: " << subject1marks << endl;
        cout << "Subject 2 marks: " << subject2marks << endl;
        cout << "Total marks: " << totalmarks << endl;
    }
};


int main() 
{
    Result r;
    r.inputrollnumber();
    r.inputmarks();
    r.calculatetotalmarks();
    r.displaydata();

    return 0;
}
