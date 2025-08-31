#include <stdio.h>

int main() {
    char name[100], address[200];
    int age;
    char bday[50];

    printf("Enter Name: ");
    scanf(" %[^\n]", name);

    printf("Enter Age: ");
    scanf("%d", &age);

    printf("Enter Address: ");
    scanf(" %[^\n]", address); 

    printf("Enter Birthday: ");
    scanf(" %[^\n]", bday);

    printf("=======================\n");
    printf("=====Personal Info=====\n");
    printf("=======================\n");
    printf("Name: %s\n", name); 
    printf("Age: %d\n", age);
    printf("Address: %s\n", address);
    printf("Birthday: %s\n", bday);

    return 0;
}
