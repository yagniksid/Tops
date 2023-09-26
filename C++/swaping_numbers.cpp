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
        
      
        friend void swap(Numbers &n);
        
        void display() 
		{
            cout << "Num1 = " << num1 << ", Num2 = " << num2 << endl;
        }
};


void swap(Numbers &n) {
    n.num1 = n.num1 + n.num2;
    n.num2 = n.num1 - n.num2;
    n.num1 = n.num1 - n.num2;
}

int main() {

    Numbers n(50, 20);
    
	cout << "before swaping numbers : ";
    n.display();
    
  
    swap(n);
    
    cout << "after swaping numbers : ";
    n.display();
    
    return 0;
}
