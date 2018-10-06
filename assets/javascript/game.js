// Global Variables
wins = 0;
losses = 0;
var randomHolder = "";
var scoreHolder = 0;


// Variables for each donut 

var donut1 = 50;
var donut2 = 10;
var donut3 = 1; 
var donut4 = 20; 

// for loop generator 3 digits 
for (var i = 0; i < 3; i++) {


    var randomSelect = [Math.floor(Math.random() * 3) + 1];

    randomHolder += randomSelect;

}

$("#randomplace").append(randomHolder); // shows the random target number in html


// On click event to generate a value for each donut 
$(".donutchoice1").on("click", function(){

    donut1Total = donut1;
    scoreHolder += donut1Total
    $("#scoreplace").text(scoreHolder);
    
    if (scoreHolder == randomHolder){

        winner();
    } 

    else if (scoreHolder > randomHolder) {

        lose();
    }

    document.getElementById("toink").play(); 
});

$(".donutchoice2").on("click", function click2(){

    donut2Total = donut2;
    scoreHolder += donut2Total
    $("#scoreplace").text(scoreHolder);

    if (scoreHolder == randomHolder){

        winner();
    } 

    else if (scoreHolder > randomHolder) {

        lose();
    }

    document.getElementById("toink").play(); 
});

$(".donutchoice3").on("click", function click3(){

    donut3Total = donut3;
    scoreHolder += donut3Total
    $("#scoreplace").text(scoreHolder);
    if (scoreHolder == randomHolder){

        winner();
    } 

    else if (scoreHolder > randomHolder) {

        lose();
    }


    document.getElementById("toink").play(); 
});

$(".donutchoice4").on("click", function click4(){

    donut4Total = donut4;
    scoreHolder += donut4Total
    $("#scoreplace").text(scoreHolder);
    if (scoreHolder == randomHolder){

        winner();
        
    } 

    else if (scoreHolder > randomHolder) {

        lose();
        
    }


    document.getElementById("toink").play(); 
});


function reset() {
    
    // reset score 
    scoreHolder = 0;
    $("#scoreplace").text(scoreHolder);

    // reset random number
    randomHolder = [Math.floor(Math.random()*200+100)]; 
    $("#randomplace").text(randomHolder);

    donut1Total = 50;
    donut2Total = 10;
    donut3Total = 1; 
    donut4Total = 20;
    
    // Add up the scores 
}


function winner() {

    alert("Omnomnom you won!");
    wins++;
    $("#winsplace").text(wins);
    reset();
    document.getElementById("bart").play(); 
}

function lose() {

    alert("Ay caramba you loss");
    losses++;
    $("#lossesplace").text(losses);
    reset();
    document.getElementById("caramba").play(); 
}



