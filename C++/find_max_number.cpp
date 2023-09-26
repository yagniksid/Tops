#include <iostream>
using namespace std;

class Numbers 
{
  
        int num1, num2;
    
    public:
        Numbers(int n1, int n2) 
		{
            num1 = n1;
            num2 = n2;
        }
        
       
        friend int max(Numbers n);
};


int max(Numbers n) 
{
    return (n.num1 > n.num2) ? n.num1 : n.num2;
}

int main() 
{
    
    Numbers n(25, 20);
    
  	int maxnumber = max(n);
    
	 cout << "Max number : " << maxnumber << endl;
    
    return 0;
}
