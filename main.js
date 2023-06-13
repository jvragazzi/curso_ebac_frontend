$(document).ready(function() {
    $('#form-tarefa').submit(function(event) {
    event.preventDefault();
    var nomeTarefa = $('#nome-tarefa').val();
    var listItem = $('<li>' + nomeTarefa + '</li>');
    
    listItem.click(function() {
        $(this).toggleClass('concluida');
    });
    
    $('#lista-tarefas').append(listItem);
    $('#nome-tarefa').val('');
    });
});
