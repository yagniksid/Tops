#include<stdio.h>
main()
{
    int year;

    printf("enter year :");
    scanf("%d" , & year);

    if (year %4 == 0)
    {
        printf("leap year" , year);

    }
    else if (year %4 != 0)
    {
    printf("not leap year" ,year);
    }
return 0;
}