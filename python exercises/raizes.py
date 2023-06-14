import math
N = int(input())
lista = input().split(" ")

for i in range(N):
    numero = float(lista[i])
    print("{:.4f}".format(math.sqrt(numero)))