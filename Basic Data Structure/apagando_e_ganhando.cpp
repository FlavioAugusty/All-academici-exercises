#include <bits/stdc++.h>

using namespace std;

int n,d;
string digitos, respostas;

int main(){
    while(cin >> n >> d){
        if(n == 0 && d == 0) return 0;

        cin >> digitos;

        int apagados = 0;
        
        for(char atual : digitos){
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
