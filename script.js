function insert(num){
   let number = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = number + num;
}
function clean (){
    document.getElementById('resultado').innerHTML = "";
}
function back (){
    let apagar = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = apagar.substring(0, apagar.length -1);
}
function calcular (){
    let calculate = document.getElementById('resultado').innerHTML;
    if(calculate){
        document.getElementById('resultado').innerHTML = eval(calculate);
    }
}