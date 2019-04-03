
$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var score = 0;


    var computerPick = parseInt(Math.floor(Math.random() * 100) + 17);
    $(".RandomNumber").html("Match this score: " +computerPick);

    var crystal1 = parseInt(Math.floor(Math.random() * 12) + 1);
    var crystal2 = parseInt(Math.floor(Math.random() * 12) + 1);
    var crystal3 = parseInt(Math.floor(Math.random() * 12) + 1);
    var crystal4 = parseInt(Math.floor(Math.random() * 12) + 1);

    function newRound() {
        score = 0;
        $("#score").html(score);
        computerPick = parseInt(Math.floor(Math.random() * 100) + 17);
        $(".RandomNumber").html("Match this score: " +computerPick);

    }

    $("#crystal1").on("click", function () {
        score = score + crystal1;
        $("#score").html("Your Total Score: " +score);
        if (score == computerPick) {
            checkWin();

        } else if (score > computerPick) {
            checkWin();
        }
    });

    $("#crystal2").on("click", function () {
        score = score + crystal2;
        $("#score").html("Your Total Score: " +score);
        if (score == computerPick) {
            checkWin();

        } else if (score > computerPick) {
            checkWin();
        }
    });

    $("#crystal3").on("click", function () {
        score = score + crystal3;
        $("#score").html("Your Total Score: " +score);
        if (score == computerPick) {
            checkWin();

        } else if (score > computerPick) {
            checkWin();
        }
    });

    $("#crystal4").on("click", function () {
        score = score + crystal4;
        $("#score").html("Your Total Score: " +score);
        if (score == computerPick) {
            checkWin();

        } else if (score > computerPick) {
            checkWin();
        }
    });

    function checkWin() {

        if (score === computerPick) {
            wins++;
            $("#wins").html("Wins: " + wins);
            alert("You won! Play again?");
            newRound();
        } else if (score > computerPick) {
            losses++;
            $("#text").html("You Lost Try Again!");
            $("#losses").html("Losses: " + losses);
            newRound();
        }
    }

});

