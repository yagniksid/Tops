#include<stdio.h>
main()
{
   
    float base , height, area;
    printf("enter hight:");
    scanf("%f" ,&base);

    printf("enter base:");
    scanf("%f" ,&height);

    area = (base * height)/2;
    printf("area of triangle is %f" , area );
     return 0;
}