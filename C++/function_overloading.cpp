	#include<iostream>
	using namespace std;
	
	
	int add(int a, int b)
	{
	    return a + b;
	}
	
		int subtract(int a, int b) 

	{
	    return a - b;
	}
	
	int multiply(int a, int b) 
	{
	    return a * b;
	}
	
	float divide(int a, int b) {
	    if (b == 0)
		{
	        cout << "Error: division by zero";
	        return 0;
	    }
	   
	    return (float)a / b;
	    
	}
	

	
	int main()
	{
	    int a_int, b_int;

		cout << "Enter two integers: ";
	    cin >> a_int >> b_int;
	    cout << "Addition: " << add(a_int, b_int) << endl;
	    cout << "Subtraction: " << subtract(a_int, b_int) << endl;
	    cout << "Multiplication: " << multiply(a_int, b_int) << endl;
	    cout << "Division: " << divide(a_int, b_int) << endl;
	
	    

	    return 0;
	}
