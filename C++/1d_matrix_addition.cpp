#include <iostream>
using namespace std;

const int size = 5;

class matrix 
{

    int m[size];

public:
    
    matrix()
	 {
        for (int i = 0; i < size; i++) 
		{
            m[i] = 0;
        }
    }

    
    matrix operator+(matrix const& obj)
	 {
        matrix res;
        
		for (int i = 0; i < size; i++) 
		{
            res.m[i] = m[i] + obj.m[i];
        }
        return res;
    }

    
    void input()
	 
	 {
        cout << "Enter " << size << " matrix elements: ";
        
		for (int i = 0; i < size; i++)
		{
            cin >> m[i];
        }
        
    }

 
    void display()
	 {
        for (int i = 0; i < size; i++) 
		{
            cout << m[i] << " ";
        }
        
		cout << endl;
    }
};

int main()

 {
    
	matrix m1, m2, m3;
    
	cout << "Enter the first matrix: " << endl;
    m1.input();
    
	cout << "Enter the second matrix: " << endl;
	m2.input();
    
	m3 = m1 + m2;
    
	cout << "The sum of the two matrix is: ";
    m3.display();
    
	return 0;
}
   