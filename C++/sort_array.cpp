#include <iostream> 
#include <algorithm> 

using namespace std; 

template <typename T> 
void sortArray(T arr[], int size) 
{ 
	sort(arr, arr + size); 
} 

int main() 
{ 
	int arr[] = {5, 1, 3, 4, 2}; 
	int size = sizeof(arr) / sizeof(arr[0]); 

	sortArray(arr, size); 
 
	for (int i = 0; i < size; i++) 
		cout << arr[i] << " "; 

	return 0; 
}