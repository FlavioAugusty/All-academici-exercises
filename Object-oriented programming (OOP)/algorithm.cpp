#include <iostream>
#include <algorithm>

using namespace std;

int main(){
    cout << min(7,3) << endl;   // Imprime o menor valor entre 7 e 3: 3
    cout << max(9,5) << endl;   // Imprime o maior valor entre 5 e 9: 9

    int v[] = {5, 4 , 3, 2, 1};

    sort(v, v+5);   // Ordenando o vetor: começando a operar na posição 0 e parando na posição 6

    for(int i = 0; i < 5; i++){
        cout << v[i] << endl;
    }
}