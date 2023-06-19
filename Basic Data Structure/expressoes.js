var input = require("fs").readFileSync(0, "utf8");
var lines = input.split("\n");

var t = parseInt(lines[0])

for(var i=1; i<=t; i++){
    var st = [];
    var ok = true;
    for(var j=0; j<lines[i].length; j++){
        if(lines[i][j] == '{' || lines[i][j] == '[' || lines[i][j] == '('){
            st.push(lines[i][j]);
        }else{
            if(st.length > 0 && st[st.length -1] == '{' && lines[i][j] == '}'){
                st.pop();
            }else if(st.length > 0 && st[st.length -1] == '[' && lines[i][j] == ']'){
                st.pop();
            }else if(st.length > 0 && st[st.length -1] == '(' && lines[i][j] == ')'){
                st.pop();
            }else{
                ok = false;
                break;
            }
        }
    }
    if(st.length > 0) ok = false;

    console.log(ok ? "S":"N");
}
