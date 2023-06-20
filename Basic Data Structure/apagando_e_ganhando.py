n, d =  0, 0

while True:
    n, d = list(map(int, input().split(" ")))
    if n == 0 and d == 0:
        break

    digit = input()
    ans = ""

    erased = 0
    for cur in digit:
        while len(ans) > 0 and cur > ans[-1] and erased < d:
            ans = ans[:-1] 
            erased += 1
        

        if len(ans) < n-d:
            ans = ans + cur
    

    print(ans)
