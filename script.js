$(document).ready(function() {
    $('main button').click(function() {
        $('ul').slideDown();
    })

    $('#botao-limpar').click(function() {
        $('ul').slideUp();
    })

    $('form').on('submit', function(e) {
    e.preventDefault();
    const novoItemLista = $('#input-lista').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<p>${novoItemLista}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(800);
        $('#input-lista').val('');
    })

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluido');
    });
})
