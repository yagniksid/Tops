#include<stdio.h>
main()
{
    int n;
    printf("enter number :");
    scanf("%d" , & n);
    printf("%d\n" , n);

    do
    
        if(n % 2 !=0)
    {
        break;
    } while(1);
    printf("thank you");
    return 0;

}