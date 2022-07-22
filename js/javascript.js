function trocatema(){
    uf =document.getElementById('uf').value;

    if (uf == "RJ"){
        newFundo ="img/riodejaneiro.jpg";
    }

    else if (uf == "SP"){
        newFundo ="img/saopaulo.jpg";
    }

    document.body.style.backgroundImage ="url("+newFundo+")";
}

function opcionais(valor,marcado){
    total=document.getElementById('total').value;
    if (marcado){
    total=Number(total)+Number(valor);
    }
    else{
    total= Number(total)-Number(valor);
    }
document.getElementById('total').value = total;
}