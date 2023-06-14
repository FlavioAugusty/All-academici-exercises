#FUNÇÕES EM STRINGS

s1 = 'Olá, neps academy'
s2 = 'Olá, neps academy'

#imprimindo caracter separadamente
print(s1[0]) # Imprime a primeira letra: O
print(s2[-1]) # Imprime a última letra: y

#operações básicas
print(len(s1))  # Imprime o tamanho da string:  17

print(s2.replace('neps', 'umbrella'))   # Imprime a string já com a substituição: Olá, umbrella academy

print(s1.split())   # Imprime a lista com os componentes separados nos espaços: ["Olá", "Neps", "Academy"]
print(s2.split('neps')) # Imprime a lista com os componentes separados pela string "Neps": ["Olá ", " Academy"]

print(s1.upper())  # Imprime a string com letras maiúsculas: OLÁ NEPS ACADEMY
print(s2.lower())  # Imprime a string com letras minúsculas: olá neps academy
print(s1.title())  # Imprime a string com padrão de título (primeira letra maiúscula): Olá Neps Academy

print('y' in s1)    # Informa se a string s contém "y": True
print('thiago' in s2) # Informa se a string s contém "Thiago": False

palavra = 'Olá'

for letra in palavra:   # Passa por cada letra na string
    print(letra)    # Imprime a letra em uma linha separada

string = 'NepsAcademy'

substring = string[4:8] # Cria uma substring com os caracteres das posições 4 à 8 de "NepsAcademy"
print(substring)

# Como a posição inicial não foi definida, ele inicia pela posição 0
print(string[:4]) # Imprime "Neps"
# Como a posição final não foi definida, ele vai até o fim da string
print(string[4:]) # Imprime "Academy"


# Imprime uma substring que começa da posição 0 (valor padrão)
# E vai até a posição final (valor padrão) incrementando 2 em 2 posições (incremento)
print(string[::2])

string = "NepsAcademy"

# Imprime a string invertida: ymedacAspeN
print(string[::-1])