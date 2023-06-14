#include <stdio.h>

template <class tipo1, class tipo2>
class par{
public:
    tipo1 primeiro;
    tipo2 segundo;
};

template <typename t1, class t2>
int um(t1 x, t2 y){
    return 1;
}

int main(){
    par<int, char> ob1;
    par<char, char> ob2;

    um(7, 'a');
}