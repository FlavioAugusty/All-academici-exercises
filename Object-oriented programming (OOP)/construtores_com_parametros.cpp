#include <stdio.h>

struct classeA{
    int x;

    classeA(){
        x = 0;
    }
    classeA(int valor){
        x = valor;
    }
};

int main(){
    classeA objeto1;
    printf("%d\n", objeto1.x);

    classeA objeto(9);
    printf("%d\n", objeto.x);

}