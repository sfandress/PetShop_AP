$(document).ready(function () {
    alert("Bienvenidos a Huellitas PetShop");
});

function validarCorreo(correo){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(correo);
    if(esValido==true){
        alert("El email ingresado es valido")
    } else {
        alert("el email ingresado no es valido")
    }
}
