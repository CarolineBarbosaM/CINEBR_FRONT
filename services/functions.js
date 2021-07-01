function listAll(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            console.log(request.responseText);
        }
    }
    request.send();
 return request.responseText;
}

function userList() {
    listAll("http://127.0.0.1:3333/user/listAll");
    //usuarios = JSON.parse(data)
}

// Funções Administrativas
function loginAdmin(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var parametros = '{"email":'+email+',"password":'+senha+'}';

    var url = 'http://127.0.0.1:3333/auth';
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            console.log(request.status);
            console.log(request.responseText);
        }
    }
    request.send(parametros);
}
function homeConteudo(){

}
function listarFilmesCurtasCadastrados(){
   var todosFilmes= listAll("http://127.0.0.1:3333/filmes/listAll")
   return todosFilmes
}

function listarSeries(){
    var todosSeries= listAll("http://127.0.0.1:3333/filmes/listAll")
    return todosSeries
}
function listarDocumentarios(){
    
}
function listarNovidades(){

}
function listarDestaques(){

}

function novoFilmeCurta(){
    event.preventDefault()
    const url = 'http://127.0.0.1:3333/filmes/create'

    const titulo = document.getElementById("titulo").value;
    const ano = document.getElementById("ano").value;
    const sinopse = document.getElementById("sinopse").value;
    const classificacao = document.getElementById("classificacao").value;
    const capa = document.getElementById("capa").value;
    const id_ator = document.getElementById("id_ator").value;
    const id_categoria = document.getElementById("id_categoria").value;

    body = {
        "titulo": titulo,
        "ano": ano,
        "sinopse": sinopse,
        "classificacao": classificacao,
        "capa": capa,
        "id_ator": id_ator,
        "id_categoria": id_categoria
    }

    fazerPost(url, body)
}

function novoSerie(){
    event.preventDefault()
    const url = 'http://127.0.0.1:3333/series/create'

    const titulo = document.getElementById("titulo").value;
    const ano = document.getElementById("ano").value;
    const sinopse = document.getElementById("sinopse").value;
    const classificacao = document.getElementById("classificacao").value;
    const capa = document.getElementById("capa").value;

    body = {
        "titulo": titulo,
        "ano": ano,
        "sinopse": sinopse,
        "classificacao": classificacao,
        "capa": capa
    }

    fazerPost(url, body)
}

function novoDocumentario(){

}
function novoNovidade(){

}
function novoDestaque(){

}

function fazerPost(url, body) {
    console.log("Body=", body);

    const request = new XMLHttpRequest();
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText);
    }

    return request.responseText
}

function novoCadastroUsuario(){
    event.preventDefault()
    const url = 'http://127.0.0.1:3333/user/create'

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const dt_nasc = document.getElementById("dt_nasc").value;
    const password = document.getElementById("password").value;
    const sexo = document.getElementById("genero").value;
    const profile = "9fc86d1c-9637-4818-830c-21243fff3b06";

    body = {
        "name_user": nome,
        "email": email,
        "dt_nascimento": dt_nasc,
        "password": password,
        "sexo": sexo,
        "profile": profile
    }

    fazerPost(url, body)
}