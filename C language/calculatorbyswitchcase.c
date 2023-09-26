#include<stdio.h>
int main()
{  
     char operator;
    int num1, num2;
    printf("enter operator (+,-,*,/) : ");
    scanf("%c",&operator);
    
    printf("enter two number : ");
    scanf("%d %d",&num1,&num2);

    switch (operator)
    {
    case '+' :
        printf("%d + %d = %d",num1, num2 , num1+num2 );   
        break;
    case '-' :
        printf("%d - %d = %d",num1, num2 , num1-num2 );   
        break;
    case '*' :
        printf("%d * %d = %d",num1, num2 , num1*num2 );   
        break;
    case '/' :
        printf("%d / %d = %d",num1, num2 , num1/num2 );   
        break;                         
    
    default:
    printf("invalid input");
        break;
    }

 return 0;

}