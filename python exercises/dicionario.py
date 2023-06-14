N = int(input())

dicionario = {}

for i in range(N):
    ingles, portugues = input().split()
    dicionario[ingles] = portugues

frase = input().split()
traducao = []
for palavra in frase:
    traducao.append(dicionario[palavra])

print(" ".join(traducao))