function listAll(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            console.log(request.responseText);
        }
    }
    request.send();
    // return request.responseText;
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
function sessaoAdmin(){

}
function fecharSessaoAdmin(){

}
function homeConteudo(){

}
function listarFilmesCurtasCadastrados(){

}
function listarSeries(){

}
function listarDocumentarios(){

}
function listarNovidades(){

}
function listarDestaques(){

}
function listarCadastrosAdmin(){

}
function novoFilmeCurta(){

}
function novoSerie(){

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