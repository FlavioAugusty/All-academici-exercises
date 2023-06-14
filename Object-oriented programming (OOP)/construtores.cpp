#include <stdio.h>

struct A{
    int x;

    A(){
        x = 0 ;
    }
};

int main (){
    A objeto1;
    printf("%d\n", objeto1.x);

    objeto1.x = 1;
    printf("%d\n", objeto1.x);

    objeto1 = A();
    printf("%d\n", objeto1.x);
}