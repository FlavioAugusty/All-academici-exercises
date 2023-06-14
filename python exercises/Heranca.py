class MinhaClasse:
    def ola(self):
        print("olá da minha classe")

class MinhaSubClasse(MinhaClasse):  # Classe que herda da "MinhaSubClasse"
    def ola(self):
        super().ola() # Executa o metodo olá da classe pai (MinhaClasse)
        print("Olá da MinhaSubClasse")

obj = MinhaSubClasse() # cria um objeto da MinhaSubClasse
obj.ola() # Executa o método olá