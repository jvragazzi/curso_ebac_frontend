function validarFormulario() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    var mensagem = document.getElementById("mensagem");
    
    if (campoB > campoA) {
        mensagem.innerHTML = "Formulário válido!";
        mensagem.style.color = "green";
        return true;
    } else {
        mensagem.innerHTML = "Formulário inválido! O campo B deve ser maior que o campo A.";
        mensagem.style.color = "red";
        return false;
    }
}
