#include<stdio.h>
main()//area of circle
{
    float radius , area;
    printf("enter radius:");
    scanf("%f", &radius);

    area = 3.14 * radius * radius;
    printf("%f", area);

    return 0;
}