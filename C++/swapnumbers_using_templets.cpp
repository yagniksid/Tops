#include <iostream>
using namespace std;
template <typename T>

void swapnumbers(T& a, T& b) 
{
    T temp = a;
    a = b;
    b = temp;
}

int main() 
{
    int x = 5, y = 10;
    
   	cout << "Before swapping: " << endl;
    cout << "x = " << x << ", y = " << y << endl;
    
	swapnumbers(x, y);
   
   	cout << "After swapping: " << endl;
    cout << "x = " << x << ", y = " << y << endl;
    
    
    return 0;
}
