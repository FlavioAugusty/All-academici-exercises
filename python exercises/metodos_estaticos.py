# Também podemos criar os chamados métodos estáticos, que são métodos que não podem acessar atributos 
#da classe nem do objeto. Em outras palavras, são apenas funções que estão no escopo da classe:

class MinhaClasse:
    @staticmethod
    def imprimir(x):
        print(x)

objeto = MinhaClasse()
objeto.imprimir(10)
MinhaClasse.imprimir(10)