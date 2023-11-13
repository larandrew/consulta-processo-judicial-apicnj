$(document).ready(function () {

    $.fn.mascaraInput();
    
});
    
$.fn.mascaraInput = function( options ){

    /* Modelos de data-mascara moeda, %-2-casas-decimais, %-3-casas-decimais,%-2-casas-decimais-negativo,moeda-negativo,numero,moeda-permite-vazio*/
    var settings = $.extend({
        mascara: '',
        prefixo: '',
        decimais: '',
        milhares: '.',
        precisao: 2,
        permitirZero: true,
        permitirNegativo: false,
        permitirVazio: '',
        sufixo: '',
    }, options );

    $.each($('[data-mascara]'), function(index, val){

        // console.log(val);

        $(this).maskMoney('destroy');

        if($(this).data('mascara') == 'moeda' || $(this).data('mascara').indexOf('casas-decimais') > 0 || $(this).data('mascara') == 'numero' || $(this).data('mascara') == 'moeda-negativo' || $(this).data('mascara') == '%-2-casas-decimais-negativo' || $(this).data('mascara') == 'inteiro-positivo' || $(this).data('mascara') == 'inteiro-positivo-nao-nulo'){

            if($(this).data('mascara').indexOf('casas-decimais') > 0){
                if($(this).data('mascara').indexOf('decimais-negativo') > 0){ settings.permitirNegativo = true;  }
                //Tipo %-2-casas-decimais
                settings.prefixo = "";
                settings.sufixo = "%";
                settings.precisao = parseInt($(this).data('mascara').substring(2,3));
                settings.decimais = ",";

            }else if($(this).data('mascara') == 'numero'){
                settings.prefixo = "";
                settings.permitirVazio = true;
                settings.decimais = ",";
                settings.sufixo = "";
                settings.precisao = 2;
                settings.milhares = ".";
                settings.permitirNegativo = true;
            }else if($(this).data('mascara') == 'inteiro-positivo'){
                settings.permitirVazio = true;
                settings.milhares = "";
                settings.permitirNegativo = false;
                settings.precisao = 0;
            }else if($(this).data('mascara') == 'inteiro-positivo-nao-nulo'){
                settings.permitirVazio = false;
                settings.permitirZero = false;
                settings.milhares = "";
                settings.permitirNegativo = false;
                settings.precisao = 0;
            }else{
                if($(this).data('mascara') == 'moeda-negativo'){
                    settings.permitirNegativo = true;
                }else if($(this).data('mascara') == 'moeda-permite-vazio'){
                    settings.permitirZero = true;
                    settings.permitirVazio = true;
                }
                settings.prefixo = "R$ ";
                settings.precisao = 2;
                settings.sufixo = "";
                settings.decimais = ",";
            }

            $(this).maskMoney({
            prefix : settings.prefixo,
            decimal : settings.decimais,
            precision : settings.precisao,
            suffix : settings.sufixo,
            thousands : settings.milhares,
            allowZero : settings.permitirZero,
            allowNegative : settings.permitirNegativo,
            allowEmpty : settings.permitirVazio
            }).maskMoney('mask', $(this).val());

        }else{
            switch($(this).data('mascara')){
                case 'cep':
                settings.mascara = '99999-999';
                break;
                case 'telefone':
                settings.mascara = '(99) 9999-9999';
                break;
                case 'celular':
                settings.mascara = '(99) 99999-9999';
                break;
                case 'cpf-cnpj':
                settings.mascara = ['999.999.999-99', '99.999.999/9999-99'];
                break;
                case 'cpf':
                settings.mascara = ['999.999.999-99'];
                break;
                case 'telefone-celular':
                settings.mascara = ['(99) 9999-9999', '(99) 99999-9999'];
                break;
                case 'telefone-celular-sem-ddd':
                settings.mascara = ['9999-9999', '99999-9999'];
                break;
                case 'numero-cnj':
                settings.mascara = ['9999999-99.9999.9.99.9999']
                break;
                case 'ddd':
                settings.mascara = ['99', '999'];
                break;
                case 'placa':
                settings.mascara = ['AAA-9999','AAA-9A99'];
                break;
                case 'codigo-fipe':
                settings.mascara = '999999-9';
                break;
                case 'agencia':
                settings.mascara = ['9-9', '99-9', '999-9', '9999-9', '99999-9', '999999-9'];
                break;
                case 'agencia-sem-dv':
                settings.mascara = ['9', '99', '999', '9999', '99999', '999999'];
                break;
                case 'agencia-itau':
                settings.mascara = ['99999999999'];
                break;
                case 'conta':
                settings.mascara = ['9-9', '99-9', '999-9', '9999-9', '99999-9', '999999-9', '9999999-9', '99999999-9', '999999999-9', '99999999999-9'];
                break;
                case 'conta-sem-dv':
                settings.mascara = ['9', '99', '999', '9999', '99999', '999999', '9999999', '99999999', '999999999', '99999999999'];
                break;
                case 'hora':
                settings.mascara = '99:99:99';
                break;
                case 'ramal':
                settings.mascara = '9999';
                break;
                case 'numero-2-digitos':
                settings.mascara = '99';
                break;
            }

            $(this).inputmask({mask: settings.mascara, keepStatic: true});
        }
    });

    $.fn.requestAjaxUpload = function (options) {
        var settings = $.extend(
            {
                url: "",
                type: "POST",
                dataType: "",
                data: "",
            },
            options
        );
    
        return $.ajax({
            url: settings.url,
            type: settings.type,
            dataType: settings.dataType,
            data: settings.data,
            cache: false,
            processData: false,
            contentType: false,
            beforeSend: function () {
                $("#load").show();
            },
            complete: function () {
                $("#load").hide();
            },
        });
    };


    
};