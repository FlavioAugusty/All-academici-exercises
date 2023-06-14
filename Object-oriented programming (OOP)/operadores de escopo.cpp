#include <stdio.h>

struct teste{
    void imprimi();
};

void teste::imprimi(){
    printf("Teste\n");
}

int main(){
    teste x;
    x.imprimi();
}