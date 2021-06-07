var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i")
            if (!expressao.test(nome))
                paciente.classList.add("invisivel")
            else
                paciente.classList.remove("invisivel")
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            pacientes[i].classList.remove("invisivel")
        }
    }
})


var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", (event) => {
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(() => {
        event.target.parentNode.remove();
    },500)


});

var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function () {
    console.log("...bucando");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    var erro = document.querySelector("#erro-ajax");
    xhr.addEventListener("load", function () {
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            erro.classList.add("#erro-ajax")
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente)
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro.classList.remove("invisivel")
        }
       
    });

    xhr.send();

});


var botaoAdicionar = document.querySelector("#adicionar-paciente")
/* palavra reservada para variavel (var, let, const) nome do objeto = {
    atributos ->
    chave : valor,
    var aluno = {
    nome: "Maurício Lacerda",
    idade: 21,
    martricula: "737386382",
    cpf: "234.567.867-97",
    estaMatriculado: true
}

console.log(aluno)
console.log(`O aluno matrículado é o ${aluno.nome} com o cpf ${aluno.cpf}`)
}
*/

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();/*Previne o comportamento padrão*/
    var form = document.querySelector("#form-adiciona");
    var paciente = getValoreDoForm(form);
    console.log(paciente)
    var erros = validaPaciente(paciente);

    console.log(erros)
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    //resetar os campos do formulário
    form.reset();
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montarTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}




function getValoreDoForm(form) {
    var aluno = {
        name: form.nome.value,
        email: form.peso.value,
        addresszipcode: form.altura.value,
        phone: form.gordura.value,
    }
    return aluno;
}
function montarTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(montaTd(paciente.name, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.email, "info-email"));
    pacienteTr.appendChild(montaTd(paciente.address.zipcode, "info-cep"));
    pacienteTr.appendChild(montaTd(paciente.phone, "info-tel"));

    return pacienteTr
}
function montaTd(data, classe) {
    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.name == 0) {
        erros.push("O nome não pode ser em branco");
    }
    if (paciente.email == 0) {
        erros.push("O Email não pode ser em branco")
    }
    if (paciente.addresszipcode == 0) {
        erros.push("O CEP não pode ser em branco")
    }
    if (paciente.phone == 0) {
        erros.push("O tel não pode ser em branco")
    }
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach((erro) => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });
}