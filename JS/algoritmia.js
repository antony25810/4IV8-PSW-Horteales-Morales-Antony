function problema1() {

    var p1_input = document.querySelector('#p1-input').value;
    //identificar como dividir el texto escrito por espacios
    var p1_array = p1_input.split(' ').reverse();
    //habia   aibah

    //construir la nueva cadena invertida
    var p1_res = '';

    p1_array.forEach(function (palabra, i) {
        //si es el principio o es el final de la cadena
        //y no agregamos espacios en blanco
        if (i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });
    //imprimir el resultado
    document.querySelector('#p1-output').textContent = p1_res;
}


//si es el principio o es el final de la cadena
//sieselprincipiooeselfinaldelacadena
//invertir
//si es elprincipiooeselfinaldelacadena


function problema2() {

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    //construir los vectores

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar los vectores

    v1 = v1.sort(function (a, b) {
        return b - a;
    });

    v2 = v2.sort(function (a, b) {
        return b - a;
    });

    //invertir el segundo vector

    v2 = v2.reverse();

    //producto escalar
    var p2_producto = 0;

    for (var i = 0; i < v1.length; i++) {
        p2_producto += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent =
        'Producto Escalar Minimo : ' + p2_producto;

}

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function problema3() {
    var p3_input = document.querySelector('#p3-input').value;
    var longitud;
    var maximo = 0;
    var validar;
    var alfabeto = [27];
    var p3_array = p3_input.split(',');
    var respuesta;

    p3_array.forEach(function (palabra, i) {
        for (var j = 0; j < 26; j++) {
            alfabeto[j] = false;
        }
        validar = 0;
        longitud = palabra.length;
        for (var j = 0; j < longitud; j++) {
            if (!alfabeto[palabra.charCodeAt(j) - 65]) {
                validar++;
                alfabeto[palabra.charCodeAt(j) - 65] = true;
            }
        }
        if (validar > maximo) {
            respuesta = palabra;
            maximo = validar;
        }

    });
    document.querySelector('#p3-output').textContent = 'La respuesta es: ' + respuesta;
}