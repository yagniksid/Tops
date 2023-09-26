#include<stdio.h>
int main() 
{
  int num1, num2, num3;
  printf("Enter first number: ");
  scanf("%d", &num1);
  printf("Enter second number: ");
  scanf("%d", &num2);

  
  num3 = num1;

  num1 = num2;

 
  num2 = num3;

 
  printf("\nAfter swapping, first number = %d %d\n", num1,num2);
  
  printf("After swapping, second number = %d %d", num2,num1);
 
  return 0;


}
