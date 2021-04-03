function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if((teclado>=48&&teclado<=57)||teclado==46){
        return true;
    }
    return false;
}

function validar2(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado>=48&&teclado<=57){
        return true;
    }
    return false;
}

function validar3(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if((teclado>=48&&teclado<=57)||teclado==45||teclado==46){
        return true;
    }
    return false;
}

function problema1_funcion(){
    var valor = document.problema1.problema1_cantidad.value;
    var resultado = parseFloat(valor);
    resultado = resultado*0.02;
    document.problema1.problema1_resultado.value = "$" + resultado;
}

function problema1_funcion_borrar(){
    document.problema1.problema1_cantidad.value="";
    document.problema1.problema1_resultado.value="";
}

function problema2_funcion(){
    var valor1 = document.problema2.problema2_cantidad1.value;
    var valor2 = document.problema2.problema2_cantidad2.value;
    var valor3 = document.problema2.problema2_cantidad3.value;
    var resultado = parseFloat(valor1)+parseFloat(valor2)+parseFloat(valor3);
    resultado = resultado*0.1;
    document.problema2.problema2_resultado1.value = "$" + resultado;
    resultado += 5000;
    document.problema2.problema2_resultado2.value = "$" + resultado;
}

function problema2_funcion_borrar(){
    document.problema2.problema2_cantidad1.value="";
    document.problema2.problema2_cantidad2.value="";
    document.problema2.problema2_cantidad3.value="";
    document.problema2.problema2_resultado1.value="";
    document.problema2.problema2_resultado2.value="";
}

function problema3_funcion(){
    var valor = document.problema3.problema3_cantidad.value;
    var resultado = parseFloat(valor);
    resultado = resultado*0.85;
    document.problema3.problema3_resultado.value = "$" + resultado;
}

function problema3_funcion_borrar(){
    document.problema3.problema3_cantidad.value="";
    document.problema3.problema3_resultado.value="";
}

function problema4_funcion(){
    var valor1 = document.problema4.problema4_cantidad1.value;
    var valor2 = document.problema4.problema4_cantidad2.value;
    var valor3 = document.problema4.problema4_cantidad3.value;
    var valor4 = document.problema4.problema4_cantidad4.value;
    var valor5 = document.problema4.problema4_cantidad5.value;
    var resultado = parseInt(valor1)+parseInt(valor2)+parseInt(valor3);
    resultado = resultado*5.5/30;
    resultado += parseInt(valor4)*3/10;
    resultado += parseInt(valor5)*1.5/10;
    document.problema4.problema4_resultado.value = resultado;
}

function problema4_funcion_borrar(){
    document.problema4.problema4_cantidad1.value="";
    document.problema4.problema4_cantidad2.value="";
    document.problema4.problema4_cantidad3.value="";
    document.problema4.problema4_cantidad4.value="";
    document.problema4.problema4_cantidad5.value="";
    document.problema4.problema4_resultado.value="";
}

function problema5_funcion(){
    var valor1 = document.problema5.problema5_cantidad1.value;
    var valor2 = document.problema5.problema5_cantidad2.value;
    var resultado1 = parseInt(valor1);
    var resultado2 = parseInt(valor2)
    var resultado3 = resultado1+resultado2;
    resultado1=resultado1*100/resultado3;
    resultado2=resultado2*100/resultado3;
    document.problema5.problema5_resultado1.value = resultado1;
    document.problema5.problema5_resultado2.value = resultado2;
}

function problema5_funcion_borrar(){
    document.problema5.problema5_cantidad1.value="";
    document.problema5.problema5_cantidad2.value="";
    document.problema5.problema5_resultado1.value="";
    document.problema5.problema5_resultado2.value="";
}

function problema6_funcion(){
    var valor = document.problema6.problema6_cantidad.value;
    var resultado = parseInt(valor);
    resultado = 2021-resultado;
    document.problema6.problema6_resultado.value = resultado;
}

function problema6_funcion_borrar(){
    document.problema6.problema6_cantidad.value="";
    document.problema6.problema6_resultado.value="";
}

function problema7_funcion(){
    var valor1 = document.problema7.problema7_cantidad1.value;
    var valor2 = document.problema7.problema7_cantidad2.value;
    var resultado1 = parseFloat(valor1);
    var resultado2 = parseFloat(valor2)
    var resultado3 = 0;
    if(resultado1==resultado2){
        resultado3=resultado1*resultado2;
    }
    else{
        if(resultado1>resultado2){
            resultado3=resultado1-resultado2;
        }
        else{
            resultado3=resultado1+resultado2;
        }
    }
    document.problema7.problema7_resultado.value = resultado3;
}

function problema7_funcion_borrar(){
    document.problema7.problema7_cantidad1.value="";
    document.problema7.problema7_cantidad2.value="";
    document.problema7.problema7_resultado.value="";
}

function problema8_funcion(){
    var valor1 = document.problema8.problema8_cantidad1.value;
    var valor2 = document.problema8.problema8_cantidad2.value;
    var valor3 = document.problema8.problema8_cantidad3.value;
    var resultado1 = parseFloat(valor1);
    var resultado2 = parseFloat(valor2)
    var resultado3 = parseFloat(valor3);
    var resultado4 = 0;
    if(resultado1>=resultado2&&resultado1>=resultado3){
        resultado4=resultado1;
    }
    else{
        if(resultado2>=resultado1&&resultado2>=resultado3){
            resultado4=resultado2;
        }
        else{
            resultado4=resultado3;
        }
    }
    document.problema8.problema8_resultado.value = resultado4;
}

function problema8_funcion_borrar(){
    document.problema8.problema8_cantidad1.value="";
    document.problema8.problema8_cantidad2.value="";
    document.problema8.problema8_cantidad3.value="";
    document.problema8.problema8_resultado.value="";
}

function problema9_funcion(){
    var valor = document.problema9.problema9_cantidad.value;
    var resultado = parseInt(valor);
    var resultado2;
    if(resultado<=40){
        resultado2 = resultado*100;
    }
    else{
        if(resultado<=48){
            resultado2 = 4000;
            resultado-=40;
            resultado2+=resultado*200;
        }
        else{
            resultado2=5600;
            resultado-=48;
            resultado2+=resultado*300;
        }
    }
    document.problema9.problema9_resultado.value = resultado2;
}

function problema9_funcion_borrar(){
    document.problema9.problema9_cantidad.value="";
    document.problema9.problema9_resultado.value="";
}

function problema10_funcion(){
    var valor = document.problema10.problema10_cantidad.value;
    var resultado = parseInt(valor);
    resultado-=2021;
    if(resultado==0){
        resultado = 50000*0.05;
    }
    else{
        if(resultado==1){
            resultado = 50000*0.07;
        }
        else{
            if(resultado>=2&&resultado<5){
                resultado=50000*0.1;
            }
            else{
                if(resultado>=5&&resultado<10){
                    resultado=50000*0.15;
                }
                else{
                    resultado=50000*0.2;
                }
            }
        }
    }
    document.problema10.problema10_resultado.value = resultado;
}

function problema10_funcion_borrar(){
    document.problema10.problema10_cantidad.value="";
    document.problema10.problema10_resultado.value="";
}