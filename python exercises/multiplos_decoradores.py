def decorador_1(func): #decorador 1

    def wrapper(*args, **kwargs):
        print("Decorador 1 chamado")
        func(*args,**kwargs)
        print("Decorador 1 finalizado")
    return wrapper

def decorador_2(func): # Decorador 2

    def wrapper(*args, **kwargs):
        print("Decorador 2 chamado")
        func(*args,**kwargs)
        print("Decorador 2 finalizado")
    return wrapper

@decorador_2
@decorador_1
def teste():
    print("Função teste chamada")

teste()