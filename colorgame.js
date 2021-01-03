var numSquares = 6;
var colors = genRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.toggle("selected");
    hardBtn.classList.toggle("selected");
    numSquares=3;
    colors = genRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.toggle("selected");
    easyBtn.classList.toggle("selected");
    numSquares=6;
    colors = genRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = genRandomColors(numSquares);
    //pick new colors from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    this.textContent= "New Colors";

    messageDisplay.textContent = "";
    //change colors od squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){

    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }
        else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genRandomColors(num){
    //make an array
    var arr = []
    //add num random colors to array
    for(var i=0; i<num; i++){
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a color from 0 to 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColors(color){
    //loop through all squares
    for(var i=0; i<squares.length; i++){
        //change each color to match given color
        squares[i].style.background = color;
    }
    
}




