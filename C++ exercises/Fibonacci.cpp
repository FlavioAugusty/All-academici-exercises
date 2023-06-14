#include <iostream>

using namespace std;

int main(){
    int N = 0;      // variável que armazenará o numero do termo da série do Fibonacci
    int I, t1, t2;  // vaiaveis auxialares
    /*
        "I" vai ser a variavel que me auxiliára no looping de calculo até o termo informado
        Como o termo fibonacci é a soma dos dois ultimos termos, então eu chamei o penultimo
        termo de "t1" e o ultimo termo de "t2" aí smp que quero saber o termo somo esses dois
        e atualizo os valores deles
    */

    int termo = 0; //irá armazenar o numero da série do termo correspondente e armazenará

    t1 = 1; // os dois primeiros numeros de sério smp irá partir do 3° termo que tem valor igual a 2
    t2 = 1; // então a soma deles tem que 1 + 1 == 2
    I = 2;  // variável auxiliar para manter o looping

    while(N <= 2){
        cout << "Digite o termo da serie Fibonacci sendo maior que 2: " << endl;
        cin >> N;
    }
    
    while(I < N){
        I++;
        termo = t1 + t2; // o termo recebendo os valores das duas ultimas séries
        t1 = t2; // atualizo o valor para o próximo termo ser a soma dos proximos dois ultimo numeros
        t2 = termo; //  

        cout << termo << " "; // mostro o numero correspondente daquela série daquele termo
    }
}