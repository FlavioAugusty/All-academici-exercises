#include <stdio.h>
#include <stdlib.h>

struct Personagem {
    char nome[50];
    int ataque;
    int defesa;
    int vida;
        
    //Crie um método que determina se o personagem morreu ou não após receber o golpe.
    int sobreviveu(int d){
        int aux = (d - defesa);
        if( aux >= vida){
            return 0;
        }else{
            return 1;
        }
    }
};

int main(){
    Personagem personagem;

    int dano;

    scanf("%s", personagem.nome);
    scanf("%d", &personagem.ataque);
    scanf("%d", &personagem.defesa);
    scanf("%d", &personagem.vida);

    scanf("%d", &dano);

    if(personagem.sobreviveu(dano)){
        printf("%s sobreviveu!!!", personagem.nome);
    }else{
        printf("%s morreu :(", personagem.nome);
    }
}

