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