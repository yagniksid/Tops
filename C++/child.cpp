#include<iostream>
using namespace std;

class mom
{
	public:
		int getmoneymom;
		void get()
		{
			cout<<"enter the money from mom = ";
			cin>>getmoneymom;
			
				}		
		void display()
		{
			cout<<"get money from mom = "<<getmoneymom<<endl;
		}
};

class dad
{
	public:
		int getmoneydad;
		void getdata()
		{
			cout<<"enter the money from dad = ";
			cin>>getmoneydad;
		 } 
		void display1()
		{
			cout<<"get money from dad = "<<getmoneydad<<endl;
		}
};

class child:public mom,public dad

{
	public:
		int totalmoney;
		
		void mymoney()
		{
			totalmoney=getmoneymom+getmoneydad;
			cout<<"totalmoney"<<totalmoney;
			
		}

};

int main()
{
	child o;
	o.get();
	o.getdata();
	o.display();
	o.display1();
	o.mymoney();
	return 0;
}