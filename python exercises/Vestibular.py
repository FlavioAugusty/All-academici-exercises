N = int(input())
G = input()
R = input()
pontos = 0

for letra in range(N):
    if R[letra] == G[letra]:
        pontos += 1
    
print(pontos)