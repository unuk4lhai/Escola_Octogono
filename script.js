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

function getAlunos(){
    fetch('http://localhost:3000/api/alunos')
	.then(function (resposta) {
        console.log(resposta);
		return resposta.json();
	})
	.then(function (dados) {
        console.log(dados);
        console.log(dados.result.length)

        dados.result.forEach(function(aluno){
            var alunoDiv = document.createElement('aside');
            var alunoIdDiv = document.createElement('article');
            var alunoNomeDiv = document.createElement('article');
            var alunoFaltasDiv = document.createElement('article');
            alunoIdDiv.appendChild(document.createTextNode(aluno.id_aluno));
            alunoNomeDiv.appendChild(document.createTextNode(aluno.nome_aluno));
            alunoFaltasDiv.appendChild(document.createTextNode(aluno.n_de_faltas));
            alunoDiv.appendChild(alunoIdDiv);
            alunoDiv.appendChild(alunoNomeDiv);
            alunoDiv.appendChild(alunoFaltasDiv);
            document.getElementById('campo_turma').appendChild(alunoDiv);
        })
	})
}

function colocarFonteDislexia(){
    document.getElementById('botao_carrega_alunos_pag_inicial').style.fontFamily = "OpenDyslexic3";
    document.getElementById('aluno_buscado').style.fontFamily = "OpenDyslexic3";
    document.getElementById('botao_gerar_relatorio').style.fontFamily = "OpenDyslexic3";
    document.getElementById('titulo_header').style.fontFamily = "OpenDyslexic3";
    document.getElementById('titulo_header_relatorio').style.fontFamily = "OpenDyslexic3";
    document.getElementsByClassName('titulo_coluna_alunos')[0].style.fontFamily = "OpenDyslexic3";
    document.getElementsByClassName('titulo_coluna_alunos')[1].style.fontFamily = "OpenDyslexic3";
    document.getElementsByClassName('titulo_coluna_alunos')[2].style.fontFamily = "OpenDyslexic3";
    document.getElementsByClassName('texto_botao_menu')[0].style.fontFamily = "OpenDyslexic3";
    document.getElementsByClassName('texto_botao_menu')[0].style.fontSize= "18px";
    document.getElementsByClassName('texto_botao_menu')[1].style.fontFamily = "OpenDyslexic3";
    document.getElementsByClassName('texto_botao_menu')[1].style.fontSize= "18px";
    lista_asides = document.getElementsByTagName("aside");
    lista_articles = document.getElementsByTagName("article");
    lista_selects = document.getElementsByTagName("select");

    for (let i = 0; i < lista_asides.length; i++){
        lista_asides[i].style.fontFamily = "OpenDyslexic3";
    }
    for (let i = 0; i < lista_articles.length; i++){
        lista_articles[i].style.fontFamily = "OpenDyslexic3";
    }
    for (let i = 0; i < lista_selects.length; i++){
        lista_selects[i].style.fontFamily = "OpenDyslexic3";
    }

    document.getElementById('botao_fonte_padrao').style.backgroundColor = "white";
    document.getElementById('botao_fonte_dislexia').style.backgroundColor = "darkred";
}

function tirarFonteDislexia(){
    document.getElementById('botao_carrega_alunos_pag_inicial').style.fontFamily = "Kadwa";
    document.getElementById('botao_carrega_alunos_pag_inicial').style.height = "7vh";
    document.getElementById('aluno_buscado').style.fontFamily = "Kadwa";
    document.getElementById('botao_gerar_relatorio').style.fontFamily = "Kadwa";
    document.getElementById('titulo_header').style.fontFamily = "Inknut Antiqua";
    document.getElementById('titulo_header_relatorio').style.fontFamily = "Inknut Antiqua";
    document.getElementsByClassName('titulo_coluna_alunos')[0].style.fontFamily = "Kadwa";
    document.getElementsByClassName('titulo_coluna_alunos')[1].style.fontFamily = "Kadwa";
    document.getElementsByClassName('titulo_coluna_alunos')[2].style.fontFamily = "Kadwa";
    document.getElementsByClassName('texto_botao_menu')[0].style.fontFamily = "Kadwa";
    document.getElementsByClassName('texto_botao_menu')[0].style.fontSize= "20px";
    document.getElementsByClassName('texto_botao_menu')[1].style.fontFamily = "Kadwa";
    document.getElementsByClassName('texto_botao_menu')[1].style.fontSize= "20px";
    lista_asides = document.getElementsByTagName("aside");
    lista_articles = document.getElementsByTagName("article");
    lista_selects = document.getElementsByTagName("select");

    for (let i = 0; i < lista_asides.length; i++){
        lista_asides[i].style.fontFamily = "Kadwa";
    }
    for (let i = 0; i < lista_articles.length; i++){
        lista_articles[i].style.fontFamily = "Kadwa";
    }
    for (let i = 0; i < lista_selects.length; i++){
        lista_selects[i].style.fontFamily = "Kadwa";
    }

    document.getElementById('botao_fonte_padrao').style.backgroundColor = "darkred";
    document.getElementById('botao_fonte_dislexia').style.backgroundColor = "white";
}
