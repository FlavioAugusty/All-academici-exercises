class Pessoa: # cria uma classe Pessoa
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

class Aluno(Pessoa):    # Herda Pessoa
    def __init__(self, nome, idade, media): # Recebe os atributos de ambas as classes
        super().__init__(nome, idade) # Chama o construtor da classe pai
        self.media = media  # Adiciona o novo atributo

class Professr(Pessoa):
    def __init__(self, nome, idade, disciplina):
        super().__init__(nome, idade)
        self.disciplina = disciplina