from functools import wraps # Importa o decorador

def decorador(func):
    @wraps(func) #decora a funcao interna
    def wrapper(*arg, **kwargs):
        return func(*arg, **kwargs)
    
    return wrapper

@decorador
def teste():
    pass

print(teste.__name__)