
function validarCorreo(correo){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(correo);
    if(esValido==true){
        alert("El email ingresado es valido")
    } else {
        alert("el email ingresado no es valido")
    }
}


function genPDF(){
    var doc=new jsPDF();
    let mensaje=document.getElementById("esc").value;
    doc.text(20,20,mensaje);
    doc.addPage();
    doc.text(20,20,'Mi trabajo!!');
    doc.save('Test.pdf');
}