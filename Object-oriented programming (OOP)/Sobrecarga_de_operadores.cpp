#include <stdio.h>

class A{
public:
    int x, y;

    A(){ x=0; y=0;}
    A(int x, int y){
        this -> x = x;
        this -> y = y;
    }

    A operator + (A ob){                   //soba um objeto com os atributos de outro objeto
        return A(x + ob.x, y + ob.y);
    }

    A operator + (int n){          // soma os valores de um objeto com um inteiro definido
        return A(x + n, y + n);
    }

    A operator -(){
        return A(-x, -y); // mudando sinal
    }

    A operator ++(){            // operador unitário no prefixo
        return A(++x, ++y);
    }

    A operator ++(int){
        return A(x++, y++);  // operador unitário no sufixo
    }
};

int main() {
    A a(1, 2), b(3, 4);
    A c = a + 5;
    printf("%d %d\n", c.x, c.y); //imprime os atributos de c
    c = a + b;
    printf("%d %d\n", c.x, c.y);
}