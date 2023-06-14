lista_de_inteiros = map(int, input().split())

resultado = [item*2 if item%2 == 0 else item*3 for item in lista_de_inteiros]

print(resultado)


#O código abaixo recebe uma lista de inteiros e os armazena na variável lista_de_inteiros.
# Você deve completar o código para criar uma nova lista, chamada resultado. Para cada item em lista_de_inteiros, 
# esse valor deve ser adicionado em resultado, multiplicado por 2 se for par e multiplicado por 3 caso contrário.