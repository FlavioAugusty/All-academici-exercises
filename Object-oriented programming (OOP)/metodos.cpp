#include <stdio.h>
struct aluno{
    char nome[50];       // Declarando o atributo nome (vetor de char com 50 posições)

    void falar(){        // Declarando e definindo o método falar()
        printf("%s\n", nome);// Imprimindo o atributo nome
    }
};

int main(){
    aluno x = {"Ronaldo"}, y = {"Tevez"}; // Declarando os objetos x e y da classe aluno e os inicializando com nomes diferentes

    x.falar();            // Chamando o método falar do objeto x
    y.falar();            // Chamando o método falar do objeto y
}