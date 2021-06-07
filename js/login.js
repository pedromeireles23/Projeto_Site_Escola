//Checar Nome e senha do usuário -- LOGIN
//Caso digite com letras maiusculas automaticamente irá converter para minuscula


function acesso(form){
    form.nome.value = form.nome.value.toLowerCase()
    form.nome.value = form.nome.value.toLowerCase()

    if(form.nome.value == "sincere@april.biz" && form.senha.value == "123"){
        location = "aluno.html"
    }
    else if (form.nome.value =="" || form.senha.value ==""){
        alert ('Os campos são obrigatórios')
    }
    else if(form.nome.value !== "sincere@april.biz" && form.senha.value !== "123")
    alert ('O nome ou a senha estão incorretos')
}
function acessoProf(form){
    form.nome.value = form.nome.value.toLowerCase()
    form.nome.value = form.nome.value.toLowerCase()

    if(form.nome.value == "pedro@gmail.com" && form.senha.value == "12345"){
        location = "professorparte.html"
    }
    else if (form.nome.value =="" || form.senha.value ==""){
        alert ('Os campos são obrigatórios')
    }
    else if(form.nome.value !== "pedro@gmail.com" && form.senha.value !== "12345")
    alert ('O nome ou a senha estão incorretos')
}


