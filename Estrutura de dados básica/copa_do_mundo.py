vencedores = [[], [], [], [], []];

vencedores[0] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
				'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']

for fase in range(1, 5):
	for i in range(0, len(vencedores[fase - 1]), 2):

		equipe1 = vencedores[fase - 1][i]
		equipe2 = vencedores[fase - 1][i + 1]

		gols1, gols2 = map(int, input().split())

		if gols1 > gols2:
			vencedores[fase].append(equipe1)
		else:
			vencedores[fase].append(equipe2)

print(vencedores[4][0])
