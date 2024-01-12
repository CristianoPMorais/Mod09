$(document).ready(function() {    
    $('header button').click(function() {            
        $('form').slideDown();
    })

    $('#BotaoCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefaut();
        const endNovaImagem = $('#EnderecoImagemNova').val();
        const NovoItem = $('<li></li>');
        $(`<img src="${endNovaImagem}" />`).appendTo(NovoItem);
        $(`
            <div class="overlay-imagem">
                <a href="${endNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(NovoItem);
        $(NovoItem).appendTo('ul');
        $('#EnderecoImagemNova').val('');
    })
})