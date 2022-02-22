function display(val){
    document.getElementById('display-input').value += val;
}

function solve(){
    let x = document.getElementById('display-input').value;
    let y = eval(x);
    document.getElementById('display-output').value = y;
}

function clr(){
    document.getElementById('display-input').value = " ";
}
