$(document).ready(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();
        const novaTarefa = $(".form-input").val();

        const tarefaExiste = $("ol li")
            .toArray()
            .some((li) => $(li).text() === novaTarefa);

        if (tarefaExiste) {
            alert("Tarefa já adicionada! Tente novamente");
            return;
        }

        const listaTarefas = $(`<li class="TarefaInserida">${novaTarefa}</li>`);
        $(listaTarefas).appendTo("ol");
        $(".form-input").val("");
    });

    $("ol").on("click", "li", function () {
        $(this).toggleClass("strike-through");
    });
});

