#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(){
    vector<int> v( {5, 4, 3, 2, 1});    // Declaração de um vetor V com os elementos 3, 1, 5, 2 e 4

    sort(v.begin(), v.end());   // Ordenando todo o vetor V

    for (int i = 0; i < v.size() ; i++){
        cout << v[i] << endl; // Imprimindo o elemento na posição i do vetor V
    }

    cout << "tamnho: " << v.size() << endl; // Imprimindo o tamanho do vetor V: 5
}