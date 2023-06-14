N = int(input())    #receber valor da quantidade de vezes que irá receber número
lista = []          # criação de lista para adicionar os números temporáriamente

for i in range(N):
    L = int(input())    # Recebe o valor informado
    lista.append(L)     # Adciona o valor na lista

set_lista = set(lista)  # criação de um set que recebe os valores da lista, e como ele não recebe valores duplicados
                        # então ele armazenará somente os numeros uma vez sem repetições

print(len(set_lista))   #imprimo o tamanho do set, ja que todos os inteiros que estão alocados são diferentes
                        # então o tamanho do set é numericamente igual a quantidade de inteiros diferentes 