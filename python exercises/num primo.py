def eh_primo(X):    # isso aqui é uma função q vai receber o numero primo e retornar verdadeiro
                    # ou falso se for numero primo ou não
    #seu código
    P = 0           # criei está variavel apenas para me auxiliar, pois irei acrescentar numeros 
                    # a ela, e ela só irá receber numeros toda vez que o resto da divisão for 0,
                    # então ela só deverá receber este acréscimo duas vezes, quando o numero for 
                    # divisil por 1 e por ele mesmo, assim saberei que é um numero primo

    for i in range(1, X+1): # esse laço de repetição irá repetir enquanto a variável i(que no caso começou
                            # sendo 1) for menor que X+1( o X é o numero fornecido, e só somei com mais 1
                            # pq esta função em python não tem como fazer até que o numero seja "<=", em python é 
                            # como se fosse usado somente "<") 

        if X%i == 0:        # aqui ele vai dividir o numero fornecido(X) pela variavel 'i'
                            # que a cada nova repetição estará 1 numero maior

            P += 1          #se a condição for verdadeira e o resto da divisão for zero, então a minha varialvel
                            # auxiliar irá receber um acréscimo de 1 numero, e minha intenção é que este acréscimo
                            # aconteça somente duas vezes, quando o numero for divisível por 1 ou por ele mesmo
                            # assim saberei que é um numero primo 
    
    if P == 2:              # Aqui verifico se minha váriavel auxiliar foi acrescida somente duas vezes
                            # pq de acordo com minha lógica criada, se for igual a 2, então este numero foi divisivel
                            # somente por 1 e por ele mesemo, e então é n° primo

        return True         # dessa forma retornarei "true", que é vdd q este numero é primo
    else:
        return False        # caso contrário, retorno que é falso, este numero não é primo
    

X = int(input())
if eh_primo(X):
    print("S")
else:
    print("N")