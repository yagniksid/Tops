#include<stdio.h>
#include<string.h>
#include<stdlib.h>
int main()
{   int choice,a;
    char s1[30],s2[30];
    int m, reversed = 0, remainder, original;
    char string[1000], sub[1000];
    int position, length, c = 0;
   do{
    printf("-----------------------------------------------------------\n");
    printf("main menu\n \t1.equality\n\t2.sringcopy\n\t3.concat\n\t4.reverse\n\t5.palidrone\n\t6.substring\n\t7.exit\n");
    printf("\nenter your choice : ");
    scanf("%d",&choice);

switch(choice)
    {
        case 1 :
        printf("enter first string : " );
        scanf("%s",&s1);
         printf("enter second string : " );
        scanf("%s",&s2);

        a=strcmp(s1,s2);

        if(a==0)
        {
        
            printf("\nstring are equal \n\n");
        }
        else
        {
           
            printf("\nstring are not equal \n\n");
        }
        break;
    
    case 2:

        printf("enter first string : " );
        scanf("%s",&s1);
        printf("enter second string : " );
        scanf("%s",&s2);
        printf("\n\nbefore copying stirng s1=%s,s2=%s\n",s1,s2);
        strcpy(s2,s1);

        printf("\nafter copying string s1=%s,s2=%s\n\n",s1,s2);
    
        break;
   
    case 3:
   
        printf("\nEnter First String: ");
        scanf("%s",s1);
        printf("Enter Second string: ");
        scanf("%s",s2);
        strcat(s1,s2);
    
        printf("String After Concatenation : %s\n\n",s1);
      
        break;

    case 4:

        printf("Enter String: ");
        scanf("%s",s1);
        printf("\nReverse string : %s\n\n",strrev(s1));
       
        break;

    case 5:
    
    printf("Enter an integer: ");
    scanf("%d", &m);
    original = m;

   
    while (m != 0) {
        remainder = m % 10;
        reversed = reversed * 10 + remainder;
        m /= 10;
    }

    
    if (original == reversed)
        printf("\n%d is a palindrome.\n\n", original);
    else
        printf("\n%d is not a palindrome.\n\n", original);

    break;
    
    case 6:
   
    printf("Input a string\n");
    gets(string);
 
    printf("Enter the position and length of substring\n");
    scanf("%d%d", &position, &length);
    break;
    
    while (c < length) {
      sub[c] = string[position+c-1];
      c++;
    }
    
    sub[c] = '\0';
 
    printf("Required substring is \"%s\"\n", sub);
 
    case 7:

    exit(0);
   
    break;

     default:

                printf("thank you\n\n ");
    }
   }
    while(choice!=7);
    return 0;
}