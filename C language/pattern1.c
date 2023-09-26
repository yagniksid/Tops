#include<stdio.h>
int main(){
  int a;
  printf("enter number : ");
  scanf("%d",&a);
  for(int i=1;i<=a;i++){
    for(int j=1;j<=a-i;j++){
      printf(" ");
    }
    for(int j=1;j<=i;j++){
      printf("%d",i);
    }
     for(int j=i;j>=1;j--){
      printf("%d",i);
    }
     
    printf("\n");
  }
   for(int i=a;i>=1;i--){
    for(int j=1;j<=a-i;j++){
      printf(" ");
    }
    for(int j=1;j<=i;j++){
      printf("%d",i);
    }
     for(int j=i;j>=1;j--){
      printf("%d",i);
    }
     
    printf("\n");
  }
}