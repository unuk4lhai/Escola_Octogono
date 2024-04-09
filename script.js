function abreNav(){
    let nav = document.getElementById("background_nav");
    nav.style.display = "flex";
}

function fechaNav(){
    let nav = document.getElementById("background_nav");
    nav.style.display = "none";
}

function abrePagRelatorio(){
    let pag_relatorio = document.getElementById("background_pag_relatorio");
    pag_relatorio.style.display = "flex";
    let nav = document.getElementById("background_nav");
    nav.style.display = "none";
}

function fechaPagRelatorio(){
    let pag_relatorio = document.getElementById("background_pag_relatorio");
    pag_relatorio.style.display = "none";
}

function abrePagAjustes(){
    let pag_ajustes = document.getElementById("background_pag_ajustes");
    pag_ajustes.style.display = "flex";
    let nav = document.getElementById("background_nav");
    nav.style.display = "none";
}

function fechaPagAjustes(){
    let pag_ajustes = document.getElementById("background_pag_ajustes");
    pag_ajustes.style.display = "none";
}
