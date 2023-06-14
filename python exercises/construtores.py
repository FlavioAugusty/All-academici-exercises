# Continuação de métodos

class MinhaClasse:
    def __init__(self, valor_atr_1, valor_atr2):
        self.atributo1 = valor_atr_1
        self.atributo2 = valor_atr2

objeto = MinhaClasse("Valor do atributo 1", "valor do atributo 2")
print(objeto.atributo1)
print(objeto.atributo2)

# Nas linhas 2 a 4, implementamos o construtor da classe. Além de self, ela recebe as variáveis "valor_atr_1" e 
# "valor_atr_2". Dentro do método, criamos os atributos "atributo1" e "atributo2", com os valores enviados. 
# Como os atributos são do objeto, utilizamos o self (que é o objeto que chamou o método!).

# Ao criar o objeto, como apenas o self é enviado automaticamente, os valores dos dois atributos devem ser enviados.