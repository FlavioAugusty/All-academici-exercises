def fatorial(N):
    i = N
    f = N
    if N != 0:
        while i > 1:
            i -= 1
            f *= N - (i)
        return f
    else:
        return 1

N = int(input())
print(fatorial(N))
