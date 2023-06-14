#include <stdio.h>

template <typename T>

class minhaclasse{
public:
    T tipogenerico; // cria uma classe de qualquer tipo
};

int main(){
    minhaclasse <int> objeto01;  // cria a classe e define de qual tipo ela será
    objeto01.tipogenerico = 5;
    printf("%d\n",objeto01.tipogenerico);

    minhaclasse <double> objeto02;
    objeto02.tipogenerico = 7.7;
    printf("%f\n", objeto02.tipogenerico);

}