window.onload = function() {
    exibirSobre();
};

function exibirContato() {
    esconderTodasAsDivs()
    var div = document.getElementById("contato");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function exibirSobre(){
    esconderTodasAsDivs()
    var div = document.getElementById("sobreMim");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    } 
}

function esconderTodasAsDivs() {
    document.getElementById("contato").style.display = "none";
    document.getElementById("sobreMim").style.display = "none";
}

function goToGitHub(){
    window.open("https://github.com/p3drojs", "_blank");
}