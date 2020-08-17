$(document).ready(function(){
    //Menu a comparsa per mobile
    $(".fa-bars").click(function(){
        $("#hamburger-menu").toggle();
    });

    //Apertura dettagli su schede progetto
    $(".card-bottom .project-details").click(function() {
        var scheda_corrente = $(this).closest(".project-item");
        scheda_corrente.find(".card-hidden").removeClass("card-hidden").addClass("card-back");
        scheda_corrente.find(".card-front").removeClass("card-front").addClass("card-hidden");
    });

    //Chiusura dettagli scheda progetto
    $(document).on("click", ".exit-details", function() {
        var scheda_corrente = $(this).closest(".project-item");
        scheda_corrente.find(".card-hidden").removeClass("card-hidden").addClass("card-front");
        scheda_corrente.find(".card-back").removeClass("card-back").addClass("card-hidden");
    });
});