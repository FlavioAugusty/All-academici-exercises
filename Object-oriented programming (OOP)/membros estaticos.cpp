#include <stdio.h>

struct A{
    int x;
    static int y;
    static void f(){
        printf("Teste %d\n", y);
    }
};

int A::y = 0;

int main(){
    A ob1, ob2;
    ob1.f();
    ob1.y = 5;
    ob1.x = 1;
    ob2.x = 2;
    printf("%d %d\n", ob1.x, ob2.x);
}