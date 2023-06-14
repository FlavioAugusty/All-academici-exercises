class Pessoa: #classe Pessoa com atributos "nome" e "idade"
    def __init__(self, nome, idade):
        self.__nome = nome
        self.__idade = idade

    def get_idade(self):    # Método "getter": retorna o atributo privado
        return self.__idade
    
    def set_idade(self, idade): # Método "setter": define o atributo privado
        self.__idade = idade

pessoa = Pessoa("Augusto", 18)  # Cria um objeto pessoa com nome "Augusto" e idade "18"
print(pessoa.get_idade())   # imprimi 18
pessoa.set_idade(10)    # Atribui "10" a variável privada __idade
print(pessoa.get_idade())
