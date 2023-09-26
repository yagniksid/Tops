#include<stdio.h>
int main()
{
    float day,year;
    printf("enter no of days : ");
    scanf("%f" , &day);
    year= day/365;                   
    printf(" year of days : %f\n",year);
    printf ("enter no of year :");
    scanf("%f",&year);
    day=year*365;
    printf("days of year : %f", day);

    return 0;
}