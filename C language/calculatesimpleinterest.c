#include<stdio.h>
main()
{
    float p, t, r, si;
    printf("enter p value");
    scanf("%f", &p);
    
    printf("enter t value");
    scanf("%f", &t);
   
    printf("enter r value");
    scanf("%f", &r);

    si= p * t * r / 100;
    
    printf("%f" ,si);
    return 0; 

}