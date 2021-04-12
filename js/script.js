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