#include <stdio.h>
#include <stdlib.h>

class A{
public:
    int x;
    A(){x = 7;}
    A(int x){ this -> x = x;}
    ~A(){printf("Algo\n");}
};

int main(){
    int *p = new int(5);
    printf("%d\n", *p);
    delete p;
}