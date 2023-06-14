A = 0
B = 0

N = int(input())
L = input().split(' ')

for i in range(N):
    A = int(not A)
    if(L[i] == '2'):
        B = int(not B)

print(A)
print(B)