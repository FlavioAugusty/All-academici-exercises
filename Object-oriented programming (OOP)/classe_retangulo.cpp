#include <stdio.h>

//TODO: Implemente a classe Retangulo
class Retangulo{
    int x, y, x1, y1;
public:
    int set_pontos(int X, int Y, int X1, int Y1){
       x = X;
       y = Y;
       x1 = X1;
       y1 = Y1;
    }

    int area(){
        int X, Y, A;
        X = x - x1;
        Y = y - y1;
        A = (X*Y);
        if(A < 0){
            A = A*(-1);
        }
        return A;
    }
};


int main(){

    Retangulo retangulo;
    int N;

    scanf("%d", &N);

    for(int i=0;i<N;i++){
        int x1, y1, x2, y2;
        char operacao;

        scanf(" %c", &operacao);

        if(operacao == 'R'){ //Redimensionar
            scanf("%d %d %d %d", &x1, &y1, &x2, &y2);
            retangulo.set_pontos(x1, y1, x2, y2);
        }else if(operacao == 'A'){ //Imprimir a área
            printf("%d\n", retangulo.area());
        }
    }
}
