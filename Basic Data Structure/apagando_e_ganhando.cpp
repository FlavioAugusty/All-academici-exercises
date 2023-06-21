#include <bits/stdc++.h>

using namespace std;

int n,d;
string digitos, respostas;

int main(){
    while(cin >> n >> d){
        if(n == 0 && d == 0) return 0;

        cin >> digitos;

        int apagados = 0;
        
        for(char atual : digitos){  // O(n)
            while(respostas.size() > 0 && atual > respostas.back() && apagados < d){ // "back" retoma o ultimo elemento da string que está sendo tratada como uma pilha para facilitar na impressão da respostas
                respostas.pop_back(); // retira o ultimo elemento da "pilha"
                apagados++;
            }
            if (respostas.size() < n - d) respostas.push_back(atual); // adiciona como último elemento
        }
        cout << respostas << endl;
        digitos.clear(); // apaguei os dados da string para iniciar o próximo ciclo
        respostas.clear();
    }
    return 0;

}
/**
 * A complexidade do código é O(n), onde n é o tamanho da string `digitos`.
 * 
 * Vamos analisar a complexidade passo a passo:
 * 
 * 1. `while(cin >> n >> d)`: A leitura dos valores de `n` e `d` tem complexidade O(1), pois lê dois valores inteiros.
 * 
 * 2. `cin >> digitos;`: A leitura da string `digitos` tem complexidade proporcional ao tamanho da entrada, 
 * ou seja, O(n), onde n é o tamanho da string lida.
 * 
 * 3. `for(char atual : digitos)`: O laço percorre cada caractere da string `digitos` uma vez, resultando 
 * em complexidade O(n), onde n é o tamanho da string.
 * 
 * 4. Dentro do laço, temos:
 * 
 * - `while(respostas.size() > 0 && atual > respostas.back() && apagados < d)`: A condição do `while` é verificada a 
 * cada iteração do laço. A operação `respostas.size()` tem complexidade O(1), a comparação `atual > respostas.back()` 
 * também tem complexidade O(1), e a comparação `apagados < d` também tem complexidade O(1). Portanto, a complexidade 
 * dessa parte é O(1).
 * 
 * - `respostas.pop_back()`: A operação `pop_back()` tem complexidade O(1), pois remove apenas o último caractere 
 * da string `respostas`.
 * 
 * - `respostas.push_back(atual)`: A operação `push_back()` tem complexidade O(1), pois insere um caractere no 
 * final da string `respostas`.
 * 
 * No geral, a complexidade do código é dominada pelo laço `for` que percorre a string `digitos`, resultando 
 * em uma complexidade total de O(n), onde n é o tamanho da string `digitos`. As demais operações dentro do 
 * laço têm complexidade constante, portanto, não impactam a complexidade geral do código.
 * 
*/