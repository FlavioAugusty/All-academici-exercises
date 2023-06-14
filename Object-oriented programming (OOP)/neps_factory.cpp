#include <stdio.h>

class Pilhas{
    int a, b, c;
public: 

    Pilhas(int a, int b, int c){
        this->a = a;
        this->b = b;
        this->c = c;
    }

    int get_a(){ return a; }

    int get_b(){ return b; }

    int get_c(){ return c; }

    void remover_caixas(int a, int b, int c){
        this->a = this->a - a > 0 ? this->a - a : 0;
        this->b = this->b - b > 0 ? this->b - b : 0;
        this->c = this->c - c > 0 ? this->c - c : 0;        
    }

    bool todas_vazias(){
        if ((this->a == 0) && (this->b == 0) && (this->c == 0)){
            return true;
        }

        return false;
    }
};

class Robo {
protected:
    bool completou;
public:
    bool completou_tarefa(){ return this->completou; }
    virtual void operar(Pilhas &P)=0;

};

//TODO: Implementar classe ModeloA que herda da classe Robo.
//TODO: Implementar classe ModeloB que herda da classe Robo.


class ModeloA : public Robo {
public:
    void operar(Pilhas &P){
        if (P.todas_vazias()){
            this->completou = true;
            return;
        }
        P.remover_caixas(1, 0, 0);
        P.remover_caixas(0, 1, 0);
        P.remover_caixas(0, 0, 1);
    }
};

class ModeloB : public Robo {
public:
    void operar(Pilhas &P){
        if (P.todas_vazias()){
            this->completou = true;
            return;
        }
        int caixas_a = P.get_a() >= 3 ? 3 : P.get_a();
        int caixas_b = P.get_b() >= 3 ? 3 : P.get_b();
        int caixas_c = P.get_c() >= 3 ? 3 : P.get_c();

        if (caixas_a >= 3){
            P.remover_caixas(3, 0, 0);
        }else if(caixas_a >= 2){
            P.remover_caixas(2, 0, 0);
        }else if(caixas_a >= 1){
            P.remover_caixas(1, 0, 0);
        }else if (caixas_b >= 3){
            P.remover_caixas(0, 3, 0);
        }else if(caixas_b >= 2){
            P.remover_caixas(0, 2, 0);
        }else if(caixas_b >= 1){
            P.remover_caixas(0, 1, 0);
        }else if(caixas_c >= 3){
            P.remover_caixas(0, 0, 3);
        }else if(caixas_c >= 2){
            P.remover_caixas(0, 0, 2);
        }else if(caixas_c >= 1){
            P.remover_caixas(0, 0, 1);
        }
    }
};


int main(){

    Robo *modeloA;
    Robo *modeloB;
    modeloA = new ModeloA();
    modeloB = new ModeloB();


    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);

    Pilhas PA = Pilhas(a, b, c);
    Pilhas PB = Pilhas(a, b, c);

    int i = 0;
    while( !modeloA->completou_tarefa() && !modeloB->completou_tarefa() ){
        modeloA->operar(PA);
        modeloB->operar(PB);
    }
    
    if(modeloA->completou_tarefa() && modeloB->completou_tarefa()){
        printf("EMPATE");
    }else if (modeloA->completou_tarefa()){
        printf("MODELO A");
    }else {
        printf("MODELO B");
    
    }

}

