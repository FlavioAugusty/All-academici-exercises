#include <bits/stdc++.h>

using namespace std;

#define mp make_pair

vector <vector <string>> team;
priority_queue < pair <int, string>> players;
int n, t;

int main(){
    cin >> n >> t; //O(1)

    for(int i=0; i<t; i++) team.push_back(vector <string>());//O(t)  // criando os vetores vazios 
                                                                    //que armazenaram os times por ordem de habilidade.

    for(int i=0; i<n; i++){//O(n)
        string name;
        int h;
        cin >> name >> h;

        players.push(mp(h, name));//O(log n)  // adcionando a habilidade como primeiro elemento do par 
                                              //para a comparação de prioridade servir.
    }//O(n log n)

    int curTeam = 0;

    while(players.size() > 0){ //O(n)
        team[curTeam].push_back(players.top().second);  // pegando o primeiro fator de maior prioridade para adcionar 
                                                        //ao time, e pegando somente o segundo elemento do par que é 
                                                        //o nome
        players.pop();
        curTeam = (curTeam+1)%t; // método usado para rotacionar a iteração em cada time
    }

    for(int i=0; i<t; i++){//O(t)
        sort(team[i].begin(), team[i].end());//O(k log k) // ordenando alfabeticamente

        cout << "Time " << i+1 << "\n";
        for(int j=0; j<team[i].size(); j++){ //O(n)
            cout << team[i][j] << "\n";
        }
        cout << "\n";
    }//o(t k log k + n)

    return 0;
}
// O(t) + O(n log n) + O(n) + O(t k log k + n) == O(n log n)