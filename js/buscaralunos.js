
var botaoMostrar = document.querySelector('#minhasInformacoes')

botaoMostrar.addEventListener('click',function(){
    console.log('buscando informaçoes')

    var xhr = new XMLHttpRequest()

    xhr.open("GET", 'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener("load",function(){
        var resposta = xhr.responseText
        const alunos = JSON.parse(resposta)
        console.log(alunos[0].name)
        const arrayNome  =  alunos.map(aluno =>{ return {name: aluno.name}})

        console.log(arrayNome)
        let tentativa2 = alunos[0].name
        let tentativa3 = alunos[0].email
        let tentativa4 = alunos[0].address.street
        let tentativa5 = alunos[0].address.city
        let tentativa6 = alunos[0].address.zipcode
        let tentativa1 = document.querySelector('.aluno')
        tentativa1.innerHTML= `<p> Nome: ${tentativa2} </p>
        <p> Email: ${tentativa3} </p> <p> Rua: ${tentativa4} </p>
        <p> Cidade: ${tentativa5}</p> <p>  CEP:${tentativa6}</p>
        <p> Provas para fazer: 0</p> <p> Atividades para fazer: 0 </p>
        <p> Mensalidade : PAGA</p>`
    })
    xhr.send()
})