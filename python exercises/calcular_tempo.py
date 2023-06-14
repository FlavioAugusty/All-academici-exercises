from functools import wraps
import time

def calcular_tempo(func):
    @wraps(func)
    def wrapper(*arg, **kwargs):

        tempo_inicial = time.time() # Armazena o tempo inicial
        retorno = func(*arg, **kwargs) # executa a função
        tempo_final = time.time() # Armazena o tempo final

        tempo_de_execucao = tempo_final - tempo_inicial # calcula o tempo de execução
        print(f"{func.__name__} finalizada em {tempo_de_execucao:.5f} segundos")
        return retorno
    
    return wrapper

@calcular_tempo
def funcao_quadrada(): #função de complexidade O(n^2) (quadrada)
    resultado = 0
    for i in range(1000):
        for j in range(1000):
            resultado += i + j

@calcular_tempo
def funcao_linear():
    resultado = 0
    for i in range(1000):
        resultado += i

funcao_linear()
funcao_quadrada()