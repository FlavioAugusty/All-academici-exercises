with open("testes.txt", "w") as arquivo: # Abre o arquivo no modo de escrit
    arquivo.write("Ola mundo!\n") # Escreve "Ola mundo!"
    arquivo.write("Minha segunda linha\n") # Escreve "Minha segunda linha"

    lista = [
        "primeira linha\n"
        "segunda linha\n"
    ] # Lista de strings

    arquivo.writelines(lista) # Escreve as strings da lista no arquivo

# Abertura do arquivo em modo de leitura
with open("testes.txt", "r") as arquivo:
    for linha in arquivo: #para cada linha no aquivo
        print(linha) # Imprima linha

# Outra maneira é utilizando o método rstrip() da string, 
# que remove caracteres no final da string. Por padrão, são removido espaços e quebras de linha:
with open("testes.txt", "r") as arquivo:
    for linha in arquivo: #para cada linha no aquivo
        print(linha.rstrip()) # Imprima linha

# Mesma coisa que o de cima, só q simplificado
with open("testes.txt", "r") as arquivo:
    print(arquivo.read(), end="")

with open("teste.txt", "r") as arquivo:
    print(arquivo.readline(), end="") # Imprime primeira linha
    print(arquivo.readline(), end="") # Imprime segunda linha
    print(arquivo.readline(), end="") # Imprime terceira linha
# Vale notar que, após uma linha ser lida, quando chamarmos o método novamente, será lida a próxima linha.

with open("teste.txt", "r") as arquivo:
    # Armazena as linhas na lista "linhas"
    linhas = arquivo.readlines()

for linha in linhas: # Para cada linha da lista
    print(linha, end="") # Imprima a linha
