function validar(formulario){
    /*
    Queremos validar que se escriban mas de 5 caracteres en el campo nombre
    */
   
    if(formulario.nombre.value.length < 5){
        alert("por favor escribe más de 5 caracteres en el campo nombre");
        formulario.nombre.focus();
    return false;
    }

    /*
    Validar que solamente acepte letras
    */

    var chechkOk= "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allValid = true;

    for(var i = 0 ; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j=0; j < chechkOk.length; j++)
        if(ch == chechkOk.charAt(j))
            break;
        if(j == chechkOk.length){
            allValid = false;
            break;
        }
    }

    if(!allValid){
        alert("Escribe solo letras en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    /*
    Validar solo numeros
    */

    var chechkOk= "1234567890";

    var checkStr = formulario.edad.value;

    var allValid = true;

    for(var i = 0 ; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j=0; j < chechkOk.length; j++)
        if(ch == chechkOk.charAt(j))
            break;
        if(j == chechkOk.length){
            allValid = false;
            break;
        }
    }

    if(!allValid){
        alert("Escribe solo letras en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    /*
    Validar correo
    Expresiones regulares
    para poder diferenciar una cadena de caracteres y definir que caracteres
    son validos de acuerdo a una condición
    */

    var txt = formulario.email.value;

    //expresion regular
    //algo@algo.com
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email" + (b.test(txt)?"":" no")+ " valido");
    return b.test(txt);
}
