function mostrarValor() {
    let tipo = document.getElementById("remuneracao");
    if (tipo.type == "password") {
        tipo.type = "text";
    } else {
        tipo.type = "password";
    }
}