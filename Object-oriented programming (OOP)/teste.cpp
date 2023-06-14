#include <stdio.h>

//TODO: Implemente a classe Retangulo

class Retangulo{

  public:

    void set_pontos(int X1, int Y1, int X2, int Y2){

      this->x1 = X1;
      this->y1 = Y1;
      this->x2 = X2;
      this->y2 = Y2;

    }

    int area(){

      int lado1 = y1 - y2;
      int lado2 = x2 - x1;

      return lado1 * lado2;

    }

  private:

    int x1;
    int y1;
    int x2;
    int y2;

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