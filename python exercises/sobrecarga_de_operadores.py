"""
 Na soma, cada valor deve ser somado entre si. Se somarmos os dois objetos, receberemos um erro, 
pois o Python não sabe como executar essa operação.

 Podemos contornar esse problema implementando um novo método chamado "soma". Porém, há uma maneira 
melhor de resolver essa problemática: podemos "sobrecarregar" o operador matemático "+", de forma que 
digamos quais passos o programa deve executar para somar dois objetos da classe "Coordenada". Fazemos isso com o 
método __add__:
"""

class Coordenada:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"({self.x}, {self.y})"
    
    def __add__(self, numero):
        x = self.x + numero.x
        y = self.y + numero.y
        return Coordenada(x, y)
    
numero1 = Coordenada(2, 3)
numero2 = Coordenada(4, 5)
soma = numero1 + numero2

print(soma)

'''
Método	Operador Matemático
__sub__	subtração (-)
__mul__	multiplicação (*)
__lt__	menor que (<)
__le__	maior ou igual que (<=)
__eq__	igual a (==)
__ne__	não igual a (!=)
__ge__	maior que (>)
__gt__	maior ou igual a (>=)
'''