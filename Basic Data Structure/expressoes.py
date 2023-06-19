t = int(input())

for _ in range(t):
    line = input()
    
    st = []
    ok = True

    for c in line:
        if c == '{' or c == '[' or c == '(':
            st.append(c)
        else:
            if len(st) > 0 and st[-1] == '{' and c == '}':
                st.pop()
            elif len(st) > 0 and st[-1] == '[' and c == ']':
                st.pop()
            elif len(st) > 0 and st[-1] == '(' and c == ')':
                st.pop()
            else:
                ok = False
                break
            
    if len(st) > 0:
        ok = False
        
    print("S" if ok else "N")
