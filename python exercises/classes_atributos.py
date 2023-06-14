#Vale ressaltar que esse atributo pertence ao objeto. Por exemplo, 
# se criarmos dois objetos com um atributo com o mesmo nome, eles podem ter valores diferentes:

class MinhaClasse():
    pass

objeto1 = MinhaClasse()
objeto1.atributo = "Atributo do objeto 1"

objeto2 = MinhaClasse()
objeto2.atributo = "Atributo do objeto 2"

print(objeto1.atributo)
print(objeto2.atributo)

