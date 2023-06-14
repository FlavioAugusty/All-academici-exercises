#include <stdio.h>

class Animal {
public:
    virtual void emitirsom() = 0; //método puramente virtual
};

class Gato : public Animal {
public:
    void emitirsom() {          // estas novas classes são obrigadas a implementar o método emitir som
    printf("Som do gato\n");
    }
};
class Cachorro : public Animal {
public :
    void emitirsom() {
        printf("Som do cachorro\n");
    }
};

int main() {
    Gato cat;
    Animal *ponteiro = &cat;
    ponteiro->emitirsom();
}
