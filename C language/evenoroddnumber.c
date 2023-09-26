
    #include <stdio.h>
    int main() 
    {
    int n; 
    printf("Enter number in the array: ");
    scanf("%d", &n);

    int array[n];


    printf("Enter %d number : ",n);
    for(int i=0;i<n;i++)
    {
    scanf("%d",&array[i]);

    }


    printf("Even numbers : ");
    for(int i=0;i<n;i++)
    
    {
    if(array[i]%2==0)
    printf("%d ", array[i]);
    
    }
       
   


    printf("\nOdd numbers : ");
    for(int i=0;i<n;i++)
    
    {
    if(array[i] %2 == 1)
    printf("%d ", array[i]);
     
    }
    
    
  
    return 0;
    }