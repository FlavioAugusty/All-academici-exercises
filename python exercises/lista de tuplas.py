N = int(input())    #receber valor da quantidade de vezes que irá receber valores
lista = []          # criação de lista para adicionar os valores temporáriamente

for i in range(N):
    L1, L2 = input().split()    # neps academy
    tupla = (L1, L2)        # ('neps', 'academy')
    lista.append(tupla)     # Adiciona o valor na lista


print(lista)   #[('neps', 'academy'), ('tiago', 'barros')]