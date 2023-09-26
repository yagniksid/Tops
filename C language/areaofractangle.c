#include<stdio.h>
main() //area of rectangle
{
    int length , width , area ;
    printf("enter length:");
    scanf("%d", &length);
    
    printf("enter width:");
    scanf("%d", &width);
     
     area = length * width;

     printf("%d" , area);
     return 0;
}