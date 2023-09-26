#include<stdio.h>
main()
{
    int a,b;
    int answer;
    int c,d;
    int answer1;
    int e,f;
    int answer2;
    int g,h;
    int answer3;

    printf("enter two number for addition :");
    scanf("%d %d",&a,&b);
    answer = a+b;
   
    printf("%d\n", answer);
    printf(" enter two number for substraction : ");
    scanf("%d %d" ,&c, &d);
    answer1 = c-d;
    printf("%d\n", answer1);
    printf(" enter two number for multiplication : ");
    scanf("%d %d" ,&e, &f);
    answer2 = e * f;
    printf("%d\n", answer2);
      printf(" enter two number for devidion : ");
    scanf("%d %d" ,&g, &h);
    answer3 = g / h;
    printf("%d\n", answer3);
    
    return 0;


}