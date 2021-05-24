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
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("include");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
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
  }
}