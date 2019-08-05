var valor1 = 0;
var valor2 = 0;
var operador = "";

function numero(valor){
    document.getElementById("visor").value += valor;
}

function operadores(sinal){
    valor1 = parseFloat(document.getElementById("visor").value);
    operador = sinal;
    document.getElementById("visor").value = "";
}


function ponto(){
    var visor = document.getElementById("visor").value;
    
    if(visor == ""){
        document.getElementById("visor").value = "0.";
    }
    
    else{
        if(visor.includes(".")){
            
        }else{
            document.getElementById("visor").value += ".";
        }
    }
}

function igual(){
    valor2 = parseFloat(document.getElementById("visor").value);
    var resultado = 0;

    
    if(operador == "+"){
        resultado = valor1 + valor2;
    }
    if(operador == "-"){
        resultado = valor1 - valor2;
    }
    if(operador == "/"){
        resultado = valor1 / valor2;
    }
    if(operador == "*"){
        resultado = valor1 * valor2;
    }
   
    if(operador == "raiz"){
      resultado = alert(Math.sqrt(parseInt(valor1)));
    }

    if(operador == "^"){
        resultado = Math.pow(valor1, valor2);
    }


    if(operador = "%"){
      resultado = (valor1 / 100) * valor2; 
    }

    document.getElementById("visor").value = resultado;
    
}

function limpar(){
    document.getElementById("visor").value = "";
    valor1 = 0;
    valor2 = 0;
    operador = "";
}

// This is a JavaScript file

/*
$(document).on("click",".numero",function(){
   var visorCalc = $("#visorCalc").val(); 
    $("#visorCalc").val($("#visorCalc").val() + $(this).val());
});

$(document).on("click","#adiçao",function(){
var adiçao = "#numero" + "#numero";
});


$(document).on("click","#somar",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1) + parseFloat(valor2);
  $("#resultado").val(result);
});
*/



