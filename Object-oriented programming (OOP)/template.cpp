#include <stdio.h>

template <typename G > G maior(G a, G b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

int main(){
    int n1 = 10, n2 = 20;
    printf("%d\n", maior(n1, n2));
}