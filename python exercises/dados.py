import csv

#abre o arquivo em modo leitura
with open("dados.csv", "r") as arquivo:
    # Carrega os dados do arquivo
    dados = csv.reader(arquivo)

    # Itera sobre os dados e imprimi cada linha
    for linha in dados:
        print(linha)

'''
 Para o cabeçalho do arquivo não aparecer, utilizamos a função next, 
enviando o objeto reader como parâmetro, que será responsável por pular uma iteração (nesse caso, uma linha):
'''
with open("dados.csv", "r") as arquivo:
    dados = csv.reader(arquivo)
    next(dados) #Pula a primeira linha

    for linha in dados:
        print(linha[0], linha[1]) # Imprime o nome e a idade
        '''
            Tiago 20
            Davi 30
            Clara 16
        '''

#mesmo resultado de cima
# Além disso, também podemos ler os dados do arquivo como dicionários ao invés de listas. Fazemos isso com o DictReader:
with open("dados.csv", "r") as arquivo:
    # Carrega os dados do arquivo com o DictReader
    dados = csv.DictReader(arquivo) 

    # Itera sobre os dados, onde cada linha é um dicionário
    for linha in dados:
        # Imprime as chaves "nome" e "idade"
        print(linha["nome"], linha["idade"])

'''
 Caso o arquivo csv não tenha um cabeçalho, utilizamos o parâmetro fieldnames para especificar as 
chaves e evitar que a primeira linha seja tratada como tal. Ele recebe uma lista de strings:

    dados = csv.DictReader(arquivo, fieldnames=["nome", "idade"])
'''

"""
Assim como a leitura, podemos realizar a escrita de duas formas, a primeira delas 
é utilizando listas. Para isso, utilizamos o objeto writer:
"""

# Abre o arquivo em modo de escrita
with open("dados.csv", "w") as arquivo:
    # Cria o objeto writer
    dados = csv.writer(arquivo, lineterminator='\n')

    # Escreve as linhas
    dados.writerow(["nome","idade"])
    dados.writerow(["tiago", "20"])
'''
Na linha 2, abrimos o arquivo em modo de escrita. Vale relembrar que isso apagará os dados já existentes.

Na linha 4, criamos o objeto writer, que recebe como parâmetro obrigatório a variável do arquivo. 
Adicionalmente, o lineterminator especifica o caractere de terminação da linha.

Nas linhas 7 e 8, utilizamos o método writerow para escreve as linhas, o qual recebe uma lista.
'''

# A outra forma de escrita é utilizando dicionários, com o objeto DictWriter:
with open("dados.csv", "w") as arquivo:
    # Cria objeto DictWriter
    dados = csv.DictWriter(arquivo, fieldnames=["nome", "idade"], lineterminator='\n')

    # Escreve cabeçalho
    dados.writeheader()
    # Escreve linha
    dados.writerow({
        "nome": "tiago",
        "idade": 20
    })

'''
Na linha 3, criamos o objeto DictWriter, o qual deve receber o parâmetro fieldnames, 
uma lista com os nomes das colunas, além dos parâmetros citados anteriomente.

Na linha 6, utilizamos o método writeheader para escrever o cabeçalho

Nas linhas 8 a 11, utilizamos o método writerow para escrever uma linha, o qual recebe um dicionário.
'''