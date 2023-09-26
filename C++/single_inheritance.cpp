#include <iostream>
using namespace std;

class Cricketer 
{

    string name;
    int age;
public:
    void getdata() 
    {
        cout << "Enter name: ";
        cin >> name;
        cout << "Enter age: ";
        cin >> age;
    }
    void displaygetdata() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};


class Batsman : public Cricketer {

    int totalRuns;
    float averageRuns;
    int bestPerformance;

public:

    void inputData() {
    
        cout << "Enter total runs: ";
        cin >> totalRuns;
        cout << "Enter best performance: ";
        cin >> bestPerformance;
        
    }
    void calculateAverageRuns() 
    {
        averageRuns = totalRuns / 10.0; // assuming 10 innings
    }

    void displayData() {

        
        cout << "Total runs: " << totalRuns << endl;
        cout << "Average runs: " << averageRuns << endl;
        cout << "Best performance: " << bestPerformance << endl;
    }
};

int main() {
    Batsman player;
    player.inputData();
    player.displayData();
    return 0;
}
