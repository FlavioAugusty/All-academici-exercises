class pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    @classmethod
    def criar_ano_por_data_de_nascimento(cls, nome, ano_de_nascimento):
        objeto = cls(nome, 2023 - ano_de_nascimento)
        return objeto
    

thiago = pessoa.criar_ano_por_data_de_nascimento("thiago", 2001) # O retorno que esse método de classe der,
print(thiago.nome)                                               #será os parametros para criação do objeto da classe pessoa
print(thiago.idade)