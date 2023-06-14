from functools import wraps

# Função que cria e retorna um decorador e recebe um argumento
def criador_decorador(arg):

    def decorador(func):    # Função decoradora
        @wraps(func)
        def wrapper(*args, **kwargs):
            print(f"Argumentos posicionais: {args}")
            print(f"Argumentos nomeados: {kwargs}")
            print(f"argumento do decorador: {arg}") # Temos cesso ao argumento
            return func(*args, **kwargs)
        
        return wrapper
    return decorador        # Retorna o decorador criado

@criador_decorador("Argumento do decorador!")   # Enviamos um argumento para o decorador
def teste(arg1, arg2):                  
    pass

teste("valor1", arg2="valor 2")