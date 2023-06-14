#include <stdio.h>

struct pessoa{
    char nome[50];
    int idade;
};

int main(){
    pessoa X, Y, Z;

    printf("Digite o nome da pessoa X: ");
    scanf("%s", X.nome);
    printf("Digite a idade da pessoa X: ");
    scanf("%d", &X.idade);

    printf("Digite o nome da pessoa Y: ");
    scanf("%s", Y.nome);
    printf("Digite a idade da pessoa Y: ");
    scanf("%d", &Y.idade);

    printf("Digite o nome da pessoa Z: ");
    scanf("%s", Z.nome);
    printf("Digite a idade da pessoa Z: ");
    scanf("%d", &Z.idade);

    int maior = X.idade;

    if(maior < Y.idade){
        maior = Y.idade;
    }else if(maior < Z.idade){
        maior = Z.idade;
    }

    if(X.idade == maior){
        printf("%s\n", X.nome);
    }

    if(Y.idade == maior){
        printf("%s\n", Y.nome);
    }

    if(Z.idade == maior){
        printf("%s\n", Z.nome);
    }

}