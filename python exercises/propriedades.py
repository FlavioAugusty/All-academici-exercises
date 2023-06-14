'''
Nas linhas 10 à 12, criamos um setter para a propriedade definida anteriormente. Perceba que utilizamos a sintaxe @nome_da_propriedade.setter e que o nome do método deve ser o mesmo da propriedade, a diferença é que ele recebe um novo atributo: o novo valor ao qual o atributo "__idade" será definido!

Com as propriedades, o acesso à variáveis privadas e o encapsulamento fica muito mais intuitivo, pois não é necessário executar um método para obter ou modificar atributos privados.

Com isso, também podemos realizar checagens para evitar valores inválidos. Por exemplo:
'''

class Pessoa: # Classe pessoa com os atributos "nome" e "idade"
    def __init__(self, nome , idade):
        if idade < 0: # Se a idade for menor que 0, gera uma execeção do tipo "AttributeError"
            raise AttributeError("Idade não pode ser negativa")
        self.__nome = nome
        self.__idade = idade

        @property
        def idade(self):
            return self.__idade
        
        @idade.setter
        def idade(self,idade):
            if idade < 0: # Se a idade for menor que 0, gera uma execeção do tipo "AttributeError"
                raise AttributeError("Idade não pode ser negativa")
            self.__idade = idade    # Atribui o novo valor a variável privada "idade"

pessoa = Pessoa("Augusto", 18)
pessoa.idade = -1
print(pessoa.idade)