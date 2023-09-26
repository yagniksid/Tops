#include<stdio.h>
int main()
{
    int n;
    printf("enter number : ");
    scanf("%d",&n);

    for(int i=n; i>=1; i--)
    {
        for(int j=1; j<=n-i; j++)
       {
       
        printf(" ");   
    }
    for(int k=i; k>=1; k--){
        printf("%d ",i);
    }
    printf("\n");
    }
    return 0;
}