$(document).ready(()=>{
    // alert('carregou o building Forms!')

    $(".custom-checkbox, .tipo-txtResp").hide()


    $("select.selecaoTypeResp").change(()=>{
       if($(".selecaoTypeResp").val() == "txt"){
        $(".tipo-txtResp").fadeToggle()
        $(".custom-checkbox").hide()
       }
       else if($(".selecaoTypeResp").val() == "boxSelect"){
        $(".custom-checkbox").fadeToggle()
        $(".tipo-txtResp").hide()
       }
    })
})