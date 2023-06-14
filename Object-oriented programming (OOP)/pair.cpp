#include <iostream>

using namespace std;

int main(){
    pair <string, int> p1 = {"abelha", 4}; // Instanciando um pair P1 que inicializará seus atributos com 
                                            // o que está contido nas chaves (ou seja, cria uma struct de dois atriubutos
                                            // de tipos de genéricos)
    cout << p1.first << " " << p1.second << endl;

}