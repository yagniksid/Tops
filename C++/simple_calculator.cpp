#include<iostream>
using namespace std;

class calculation
{
    public:

    float a,b;
    void getdata()
    {
        cout<<"enter two numbers :";
        cin>>a>>b;
    }
    void addition()
    {
        int answer;
        answer=a+b;
        cout<<"addition = "<<answer<<endl;

    }
      void substraction()
    {
        int answer;
        answer=a-b;
        cout<<"substraction = "<<answer<<endl;

    }
      void multiplication()
    {
        int answer;
        answer=a*b;
        cout<<"multiplication = "<<answer<<endl;

    }
      void division()
    {
        float answer;
        answer=a/b;
        cout<<"division = "<<answer<<endl;

    }
};
int main()
{
    calculation c1,c2;
    c1.getdata();
    c1.addition();
    c1.getdata();
    c1.division();
    c1.getdata();
    c1.multiplication();
    c2.getdata();
    c2.substraction();
    return 0;

}