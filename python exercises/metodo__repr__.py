''' Métodos "Dunder", também conhecidos como métodos mágicos, são métodos especiais utilizados para definir comportamentos 
#específicos para uma classe quando determinada operação ocorrer. Eles começam e terminam com dois "underlines" (__).

O método __repr__ permite modificar como o objeto é representado, ou seja, como ele vai ser impresso. Por exemplo:
'''
class MinhaClasse:
    def __repr__(self):
        return "<objeto MinhaClasse>"
    
objeto = MinhaClasse()
print(objeto)

""" É interessante utilizar esse método retornando alguma informação da instância do objeto. Por exemplo, a definição 
 desse método em uma classe "Pessoa" que possua o atributo "nome" poderia retornar f"Pessoa {self.nome}
"""