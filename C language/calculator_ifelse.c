#include<stdio.h>
main()
{   char operator; 
    int num1, num2, answer;

    printf("enter operator :");                                                                    
    scanf("%c" , &operator);
    printf("enter two number one by one : ");
    scanf("%d %d",&num1,&num2 );
    if (operator == '+')
    {
        answer = num1 + num2;
        printf("%d",answer);
    }
    else if(operator == '-')
      {
        answer = num1 - num2;
        printf("%d",answer);
    }
    else if(operator == '*')
      {
        answer = num1 * num2;
        printf("%d",answer);
    }
    else if(operator == '/')
      {
        answer = num1 / num2;
        printf("%d",answer);
    }
    else 
        {
        printf("invalid input");
        }
    return 0;
}