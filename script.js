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
