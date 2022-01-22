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

    if (window.matchMedia('(min-width: 360px)').matches) {
        $(".mostrarMas").click(function (){
            $(".mostrarMas").fadeOut();
            $(".catalogoCompleto").fadeIn();
            $(".pase").addClass("espaciado");
        })
    }

    if (window.matchMedia('(min-width: 768px)').matches) {
        $(".mostrarMas").click(function (){
            $(".mostrarMas").fadeOut();
            $(".catalogoCompleto").fadeIn();
            $(".pase").addClass("espaciado");
            $(".pase").removeClass("espaciado");
        })
    }


    if (window.matchMedia('(min-width: 1200px)').matches) {
        $(".mostrarMas").click(function (){
            $(".mostrarMas").fadeOut();
            $(".catalogoCompleto").fadeIn();
            $(".pase").addClass("espaciado");
            $(".pase").removeClass("espaciado");
        })
    }


})