#include <stdio.h>
#include <stdlib.h>

struct classeA{
    int *p;
    ~classeA(){
        printf("morreu\n");
        free(p);
    }
};

int main(){
    classeA objeto;
    objeto.p = (int*)malloc(sizeof(int)*9);
    printf("vai acabar\n");
}