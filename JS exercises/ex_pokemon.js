var input = require("fs").readFileSync(0, "utf8");
var lines = input.split("\n");
var alimentados = 0;

class pokemon{

    constructor(id, fome){
        this.id = id;
        this.fome = fome;
    }
}

let doces = parseInt(lines.shift());

const classes = [

    new pokemon(1, parseInt(lines.shift())),
    new pokemon(2, parseInt(lines.shift())),
    new pokemon(3, parseInt(lines.shift()))
];

classes.sort((a, b) => a.fome - b.fome);

for(const cls of classes){
    doces -= cls.fome;
    if( doces >= 0){
        alimentados++;
    }
}

console.log(alimentados);