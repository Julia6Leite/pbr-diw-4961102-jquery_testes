$("document").ready(function () {
    $("#game1").hide();
    $("#game2").hide();
    $("#game3").hide();

    $(".voltar").click(function(){
        $("#selecao_games").show();
        $("#game1").hide();
        $("#game2").hide();
        $("#game3").hide();
    })
    
    $("#btnjogo1").click(function () {
        $("#selecao_games").hide();
        $("#game1").show();
        $("#game2").show();
        $("#game3").show();
    });

    $("#flw1").click(function () {
        $("#msg").text("Você beberá muita coca hoje");
    });

    $("#flw2").click(function () {
        $("#msg").text("Você ganhará na loteria");
    });

    $("#flw3").click(function () {
        $("#msg").text("Você ganhará uma flor");
    });

    $("#flw4").click(function () {
        $("#msg").text("Perdeu! Você tomará um soco.");
    });
});

