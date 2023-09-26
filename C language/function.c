#include<stdio.h>
int addition(int a, int b)
{
  int sum = a + b;
  return sum;

}
 int main()
 {
    int a , b,answer;
    printf("enter two number number : ");
    scanf("%d %d",&a,&b);
    answer= addition(a,b);
    printf("answrer is %d",answer);
    return 0;
 }