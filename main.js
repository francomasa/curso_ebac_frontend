$(document).ready(function(){
    const listaDeTarefas = [];
    $('#tarefa-nova').focus();

    $('form').on('submit', function(e){
        e.preventDefault();
        adicionaTarefa();
    })

    $(document).on('click', 'li', function(){
        $(this).toggleClass('itemTarefaPronta');
    });
    


    function adicionaTarefa(){
        novaTarefa = $('#tarefa-nova').val();
        if(listaDeTarefas.includes(novaTarefa)){
            alert(`A tarefa ${novaTarefa} ya fue inserida`);
        }
        else{
            listaDeTarefas.push(novaTarefa);
            const novoItem = $(`<li style="display:none;">${novaTarefa}</li>`);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);
            $(`#tarefa-nova`).val('');
            $(`#tarefa-nova`).focus();
        }
    }
});