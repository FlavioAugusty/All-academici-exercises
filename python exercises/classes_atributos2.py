#Para alterar um atributo de classe, é importante alterarmos na própria classe 
# (MinhaClasse.A), pois, se utilizarmos o objeto (objeto.A), estaremos criando um 
# novo atributo do objeto. Por exemplo:

class MinhaClasse:
    A = 10

objeto1 = MinhaClasse()
objeto2 = MinhaClasse()
''
print(f"antes : {objeto1.A}, {objeto2.A}")
MinhaClasse.A = 2
print(f"depois : {objeto1.A}, {objeto2.A}")