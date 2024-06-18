$(document).ready(function() {
    // Inicializa o carousel com autoplay
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    // Aplica máscaras aos campos de entrada
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    // Validação do formulário
    $('#form').validate({
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
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            console.log(form);
        },
        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert("Por favor, preencha os campos para prosseguir com a compra!");
            }
        }
    });
});