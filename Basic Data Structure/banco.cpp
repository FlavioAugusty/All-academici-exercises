/**
 *  This is an exercise in which I need to create a priority queue for a bank service and
 * return the number of clients who have waited for more than 20 minutes:
 *      -the number of attending cashiers is variable
 *      -priority is given in the order of arrival.
 * 
 *  Este é um exercício em que preciso criar uma fila de prioridade para um banco atender e 
 * retornar o número de clientes que esperaram mais de 20 minutos:
 *      - o numero de caixas que atendem é variável 
 *      - a prioridade é dada por ordem de chegada
*/

#include <bits/stdc++.h>
using namespace std;

#define mp make_pair

priority_queue < pair <int, int>, vector<pair<int, int>>, greater<pair<int, int>>> caixas;

int C, N, T, D, S, diferenca;

/**
 * O primeiro, C, é o número de caixas ativas na agência bancária. O segundo, N, o número de clientes 
 * que procurarão atendimento na agência naquele dia.
 * 
 * O inteiro T fornece o momento em que o cliente entra na fila, em minutos, 
 * a partir do instante de abertura da agência. O inteiro D fornece, em minutos, 
 * o tempo necessário para atender o cliente. As linhas estão ordenadas por entrada 
 * dos clientes na fila.
 * 
 * S é a saída com o número de clientes que esperaram mais que 20 minutos.
*/

int main(){
    cin >> C >> N;

    for(int i=0; i < C; i++){

        caixas.push(mp(0, i));
    }

    S = 0;
    diferenca = 0;
    pair<int, int> top_element;
    
    for(int i = 0; i < N; i++){
        cin >> T >> D;
        pair<int, int> top_element = caixas.top();
        caixas.pop();

        int chegada_caixa = top_element.first;
        int caixa_id = top_element.second;

        int espera = max(chegada_caixa - T, 0); // Tempo de espera do cliente atual
        if (espera > 20) {
            S++;
        }

        int proximo_atendimento = max(T, chegada_caixa) + D;
        caixas.push(mp(proximo_atendimento, caixa_id));
    }

    cout << S;
}