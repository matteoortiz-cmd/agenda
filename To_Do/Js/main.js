$(function(){
    $("#botao").click(inserirTarefa);
});

function inserirTarefa(){
    var tabela = $(".tarefas").find("tbody");
    var campoTitulo = $(".campoTitulo").val().trim();
    var campoObs = $(".campoObs").val().trim();
    var campoPrioridade = $(".campoPrioridade").val();

    if (campoTitulo === "" || campoObs === "") {
        alert("Preencha o título e a observação antes de cadastrar a tarefa.");
        return;
    }

    var linha = funLinha(campoTitulo, campoObs, campoPrioridade);
    linha.find(".botaoDeletar").click(deletaLinha);
    linha.find(".botaoConcluir").click(concluiLinha);
    tabela.append(linha);

    $(".campoTitulo").val("");
    $(".campoObs").val("");
    $(".campoTitulo").focus();

    alert("Tarefa cadastrada com sucesso!");
}

function funLinha(campoTitulo, campoObs, campoPrioridade){
    var linha = $("<tr>");
    var colunaTarefa = $("<td>").text(campoTitulo);
    var colunaObs = $("<td>").text(campoObs);
    var colunaPrioridade = $("<td>").text(campoPrioridade);
    var colunaConcluir = $("<td>");
    var colunaDelete = $("<td>");

    var bConcluir = $("<a>").addClass("botaoConcluir").attr("href","#");
    var iconeConcluir = $("<i>").addClass("material-icons").text("check");
    bConcluir.append(iconeConcluir);
    colunaConcluir.append(bConcluir);

    var bDeletar = $("<a>").addClass("botaoDeletar").attr("href","#");
    var icone = $("<i>").addClass("material-icons").text("delete");
    bDeletar.append(icone);
    colunaDelete.append(bDeletar);

    linha.append(colunaTarefa);
    linha.append(colunaObs);
    linha.append(colunaPrioridade);
    linha.append(colunaConcluir);
    linha.append(colunaDelete);

    return linha;
}

function concluiLinha(event){
    event.preventDefault();
    $(this).parent().parent().toggleClass("concluida");
}

function deletaLinha(event){
    event.preventDefault();

    if (confirm("Deseja realmente apagar esta tarefa?")) {
        $(this).parent().parent().remove();
    }
}