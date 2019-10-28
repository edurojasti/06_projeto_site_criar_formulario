$(document).ready(()=>{
    // $('.emailAnimado, .senhaAnimada, #submisioes, #h3X').hide()
    animar()

    function animar(){
        document.querySelector("body").style.overflow = 'hidden'
        setTimeout(() => {
            $('#submisioes').addClass('animated bounceInUp').show()   
        }, 1000);
        setTimeout(() => {
            $('.senhaAnimada').addClass('animated slideInLeft').show()   
        }, 800);
        setTimeout(() => {
            $('.emailAnimado').addClass('animated slideInLeft').show()
        }, 600);
        setTimeout(() => {
            $('#h3X').addClass('animated bounceInDown').show()   
        }, 1300);
    }
})