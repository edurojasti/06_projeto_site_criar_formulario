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

    //insere ID em cada elemento de input.form-control
    for(var i = 0; i < itensINPUTS.length; i++){
       itensINPUTS[i].id = `elementoInput${i}`
    }
    
    //ao passsar o mouse sobre o elemento busca o ID de cada um pra inserir animação em cada elemento
    $('.form-control').mouseover(function(){
        var seuID = this.id
        $('#'+seuID).addClass('animated pulse')
        $(this).css('cursor', 'pointer')
    })

    //ao retirar o mouse sobre o elemento, busca o ID de cada um pra inserir animação em cada elemento
    $('.form-control').mouseleave(function(){
        var seuID = this.id
        $('#'+seuID).removeClass('animated pulse')
        $(this).css('cursor', 'pointer')
    })


    $('#sair').on('click', ()=>{
        var linkAtual = location.href = 'login.html'
        // window.close(linkAtual)
    })
})

var inputes = document.querySelectorAll('input[text]')
for(var i = 0; i <  inputes.length; i++){
    inputes[i].className = 'form-control'
}

    