$(document).ready(function(){    

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DD) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages:{
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu telefone'
        },

        submitHandler: function (form) {
            form.submit();
        },

        invalidHandler: function (form, validator) {
            return ;
        }
    })
});