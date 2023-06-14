var input = require("fs").readFileSync(0 , "utf8");
var resultado = input.split("\n");


        

let vencedores = [[], [], [], [], []];

vencedores[0] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];

for (let fase = 1; fase < 5; fase++) {
    for (let i = 0; i < vencedores[fase - 1].length; i += 2) {
        let equipe1 = vencedores[fase - 1][i];
        let equipe2 = vencedores[fase - 1][i + 1];

        let [gols1, gols2] = resultado.shift().split(" ").map(Number);
        if (gols1 > gols2) {
            vencedores[fase].push(equipe1);
        } else {
            vencedores[fase].push(equipe2);
        }
    }
}

console.log(vencedores[4][0]);
