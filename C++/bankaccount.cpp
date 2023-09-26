#include<iostream>
#include<string>
using namespace std;
class bank
{
    public :

    int acno,damt,wamt;
    string name, type;
    float bal=50000;

    void details()
    {
        cout<<endl<< "Enter Details: "<<endl;
        cout<<"-----------------------"<<endl;
        cout<<"enter name of depositor : "<<endl;
        cin>>name;
        cout<<"enter your account number :"<<endl;
        cin>>acno;
        cout<<"enter your account type : "<<endl;
        cin>>type;
        cout<<"balance : "<<bal<<endl;
        
    }
    void deposit()
    {  
        cout<<"enter deposite amount :";
        cin>>damt;  
        bal+=damt;  
     }
    void withdraw()
    {
        cout<<"enter your withdraw amount : ";
        cin>>wamt;
        if(wamt>bal)
        cout<<"can not withdraw amount : ";
        bal-=wamt;
    }
    void display() 
    {
        cout<<" ----------------------"<<endl;
        cout<<endl<<"Accout No. : "<<endl<<acno;
        cout<<endl<<"Name : "<<endl<<name;
        cout<<endl<<"Account Type : "<<endl<<type;
        cout<<endl<<"Balance : "<<endl<<bal;  
    }
};

int main ()
{

        
        bank b1;
        b1.details();
        b1.deposit();
        b1.withdraw();
        b1.display();

        
        return 0;
}
