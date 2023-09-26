#include <iostream>
using namespace std;

const float PI = 3.14;


float area(float length, float breadth) {
    return length * breadth;
}


float area(float base, float height, bool isTriangle) {
    if (isTriangle) {
        return 0.5 * base * height;
    } else {
        return -1;
    }
}


float area(float radius) {
    return PI * radius * radius;
}

int main() {
    float length, breadth, base, height, radius;

   
    cout << "Enter length and breadth of rectangle: ";
    cin >> length >> breadth;
    cout << "Area of rectangle: " << area(length, breadth) << endl;


    cout << "Enter base and height of triangle: ";
    cin >> base >> height;
    cout << "Area of triangle: " << area(base, height, true) << endl;


    cout << "Enter radius of circle: ";
    cin >> radius;
    cout << "Area of circle: " << area(radius) << endl;

    return 0;
}
