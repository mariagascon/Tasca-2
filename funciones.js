/*Esta función comprueba que el DNI introducido existe y para ello comprueba que la letra del DNI se corresponde
con la parte de los números del DNI*/
function comprobardni() {
    var dni = document.getElementById("dni").value;
    var numero = dni.substr(0, dni.length-1);
    var letra = dni.substr(-1).toUpperCase();
    console.log(letra);
    var letrasacomprobar = ["T", "R", "W", "A", "G", "M", "Y", "F", "T", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"] 

    var letracomprobada = letrasacomprobar[numero%23];
    
    /*En caso que la letra introducida no sea correcta saldrá una ventana emergente que obligará al usuario a 
    volver a introducir el DNI*/
    if (letracomprobada!=letra) {
        return false;
    }

}
