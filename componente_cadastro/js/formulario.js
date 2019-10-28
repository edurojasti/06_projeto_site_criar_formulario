$(document).ready(()=>{
    var itensINPUTS = document.querySelectorAll('input.form-control')
    // document.querySelector("body").style.overflow = 'hidden'

    $('#headerDesktop').hide()
    var animarForm = ()=>{
        setTimeout(() => {
            $('#headerDesktop').addClass('animated fadeInLeft').show()
        }, 500);
    }
    animarForm()
    
    $('#btnSalvar').on('click', ()=>{
        if($("#msg").val() == '' ||$("#msg").val() == null){
            $('#alerta').text('Digite uma mensagem!')
            $('#alerta').addClass('msgAlert')
            $("textarea").css('border', '2px solid crimson')
        }else{
            $('#alerta').text('Concerteza!')
            $('#alerta').addClass('msgAlert2')
        }
    })
})

    