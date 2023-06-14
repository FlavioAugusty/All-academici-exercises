#include <stdio.h>

class A{
    int a;
public:
    int valor(){
        return a;
    }
    void altera(int x){
        a = x;
    }
};

int main(){
    A x;
    x.altera(7);
    printf("%d\n", x.valor());
}