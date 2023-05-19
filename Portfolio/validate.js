let form = document.querySelector(".form");
let inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
    input.addEventListener("input", checarInput)
});

function checarInput(){
    let checar = true;

    inputs.forEach(function (input) {
        if (input.value == ""){
            checar = false;
        }
    });

    console.log(checar);

    if (checar){
        form.querySelector("btn").removeAttribute("disabled");
    }else{
        form.querySelector("btn").setAttribute("disabled", "");
    }
}

// function validar(){
//     var nome = formulario.nome;
//     if (nome.value == ""){
//         alert("Favor informar seu nome");
//         nome.focus;
//     }

//     var email = formulario.email;
//     if (email.value == ""){
//         alert("Favor informar email")
//         email.focus;
//     }

//     var assunto = formulario.assunto;
//     if (assunto.value == ""){
//         alert("Favor informar o assunto")
//         assunto.focus;
//     }

//     var mensagem = formulario.mensagem;
//     if (mensagem.value == ""){
//         alert("Favor preencher sua mensagem")
//         mensagem.focus;
//     }else{
//         var btn = formulario.bottao
//         btn.removeAttribute("disabled");
//         btn.classList.add("ativarBotao");
//     }
// }

// nome.addEventListener("input", validar);
// email.addEventListener("input", validar);
// assunto.addEventListener("input", validar);
// mensagem.addEventListener("textarea", validar);


// function validarInputs(){
//     if (nome.value !== "" && email.value !== "" && assunto.value !== "" && mensagem.value.length <= 300){
//         btn.classList.add("ativarBotao");
//         btn.removeAttribute("disabled");
//         // btn.setAttribute("enabled");
//     }else{
//         // alert("Preencha os campos e clique em Enviar");
//         btn.classList.remove("ativarBotao");
//         // btn.removeAttribute("enabled");
//         btn.setAttribute("disabled", "disabled");
//     }
// }

// nome.addEventListener("input", validarInputs);
// email.addEventListener("input", validarInputs);
// assunto.addEventListener("input", validarInputs);
// mensagem.addEventListener("textarea", validarInputs);

