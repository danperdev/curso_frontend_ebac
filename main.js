const form = document.getElementById("meuFormulario");
let campoA = document.getElementById("campoA");
let campoB = document.getElementById("campoB");

form.addEventListener("submit", function(e)
{
    e.preventDefault();

    const mensagemResposta = document.getElementById("message-return");
    const mensagemValida = `Formulário válido! campo B é maior que o campo A.`;
    const mensagemInvalida = `Formulário inválido! campo B é menor que o campo A.`;
    const mensagemIgual = `Formulário inválido! campo B é igual ao campo A.`;

    if (campoB.value > campoA.value)
    {
        mensagemResposta.innerHTML = mensagemValida;
        mensagemResposta.style.display = "block";
    }

    else if(campoB.value == campoA.value)
    {
        mensagemResposta.innerHTML = mensagemIgual;
        mensagemResposta.style.display = "block";
    }

    else
    {
        mensagemResposta.innerHTML = mensagemInvalida;
        mensagemResposta.style.display = "block";
    }

})