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
function novoCadastroAdmin(){

}