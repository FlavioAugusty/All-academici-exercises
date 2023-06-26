import heapq

players = []
team = []
n, t = list(map(int, input().split(" ")))

heapq.heapify(players)

for _ in range(t):
    team.append([])

for _ in range(n):
    aux = input().split(" ")
    name = aux[0]
    h = -(int(aux[1]))

    heapq.heappush(players, [h, name])

curTeam = 0

while len(players) > 0:
    h, name = heapq.heappop(players)
    team[curTeam].append(name)
    curTeam = (curTeam+1)%t

for i in range(0, t):
    print(f"Time {i+1}")

    for name in sorted(team[i]):
        print(name)
    
    print()
