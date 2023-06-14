#include <stdio.h>
#include <stdlib.h>
#include <time.h>

class A{
    int x;
    friend int qual(A);
    friend void coloca (A*, int);
};
int qual(A objeto){ return objeto.x ;}
void coloca(A *objeto, int valor) { objeto -> x = valor ;}

int main(){
    A objeto;
    coloca(&objeto, 7);
    printf("%d\n", qual(objeto));
}