function openModal(){
    document.getElementById("modal").style.display = "block";
    
    var mod = document.getElementById("modeffec");
    var op = 0.1;
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        mod.style.marginTop = '5%';
        mod.style.opacity = op;
        mod.style.filter = 'alpha(opacity=' + op * 1000 + ")";
        op += op * 0.3;
    }, 10);
}
function closeModal(){
    var mod = document.getElementById("modeffec");
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0){
            clearInterval(timer);
            oc();
        }
        mod.style.marginTop = '15%';
        mod.style.opacity = op;
        mod.style.filter = 'alpha(opacity=' + op * 1000 + ")";
        op -= op * 1;
    }, 250);
}
function oc(){
    document.getElementById("modal").style.display = "none";
}

// Includes HTML
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*percorre pelo html pegando todos os seletores:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*pesquisa pelo elemento com o atributo abaixo:*/
    file = elmnt.getAttribute("include");
    if (file) {
      /*abre uma solicitação HTTP para usar o conteúdo do atributo como nome da página solicitada:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Opa! Erro em include.";}
          /*remove o atributo e chama a função novamente:*/
          elmnt.removeAttribute("include");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*saída da função:*/
      return;
    }
  }
  menuConfig();
};

// Class menu active
function menuConfig(){
  switch (page){
    case 1:
      document.getElementById(1).classList.add('active');
      break;
    case 2:
      document.getElementById(2).classList.add('active');
      break;
    case 3:
      document.getElementById(3).classList.add('active');
      break;
    case 4:
      document.getElementById(4).classList.add('active');
      break;
    case 5:
      document.getElementById(5).classList.add('active');
      break;
    case 6:
      document.getElementById(6).classList.add('active');
      break;
    case 7:
      document.getElementById(7).classList.add('active');
      break;
    case 8:
      document.getElementById(8).classList.add('active');
      break;
    case 0:
      break;
  }
}