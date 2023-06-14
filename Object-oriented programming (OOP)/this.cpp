#include <stdio.h>
#include <stdlib.h>

class A{
    int x;
public:
    int qual(){
        return this -> x;
    }
    void set_x(int x){
        this -> x = x;
    }
    A *posicao(){
        x++;
        return this;
    }
};

int main(){
    A a;
    a.set_x(3);
    A *p = a.posicao() -> posicao();
    printf("%d\n", a.qual());
    printf("%d\n", p->qual());
}