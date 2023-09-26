#include <iostream>
using namespace std;


inline int multiply(int x, int y) 
{
    return x * y;
}


inline int cube(int x) 
{
    return x * x * x;
}

int main()
 {
    int a, b;

    cout << "Enter two numbers: ";
    cin >> a >> b;


    int value = multiply(a, b);


    int cuberesult = cube(value);

    cout << "The value of " << a << " and " << b << " is: " << value << endl;
    cout << "The cube of " << value << " is: " << cuberesult << endl;

    return 0;
}
