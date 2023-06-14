#include <stdio.h>

class humano{
    int idade;
public:
    humano(){idade = 0;}
    int get_idade(){return idade;}
    int set_idade(int valor){
        if(valor >= 0 && valor < 200){
            idade = valor;
        }
    }
};

int main(){
    humano maluco;
    printf("%d\n", maluco.get_idade());
    maluco.set_idade(30);
    printf("%d\n", maluco.get_idade());
    maluco.set_idade(-30);
    printf("%d\n", maluco.get_idade());
}