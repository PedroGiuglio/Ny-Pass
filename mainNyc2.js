$(function () {

    $(".mapa").click(function () {
        $("#lugares").fadeOut();
        $(".mostrarMas").fadeOut();
        $(".col-1").fadeOut();
        $(".mapaNy").fadeIn();
    })
    $(".atracciones").click(function () {
        $(".mapaNy").fadeOut();
        $("#lugares").fadeIn();
        $(".col-1").fadeIn();

    })

    if (window.matchMedia('(max-width: 360px)').matches) {
        $(".mostrarMas").click(function (){
            $(".mostrarMas").fadeOut();
            $(".catalogoCompleto").fadeIn();
            $(".pase").addClass("espaciado");
            
        })
    }

    $(".mostrarMas").click(function (){
        $(".mostrarMas").fadeOut();
        $(".catalogoCompleto").fadeIn();        
    })


})