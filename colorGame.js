var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



init();

function init(){
	setupButtons();
	setupSquares();
	reset();
}


function setupButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
			reset();
		});
	}

	resetButton.addEventListener("click", reset);	
}


function setupSquares() {
	for(var i = 0 ; i<squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor===pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function reset() {
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick new random color from array
	pickedColor= pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares on the page
	for(var i = 0; i<squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}


function changeColors(color) {
	for(var i = 0 ; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}


function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i =0; i<num; i++) {
		//get random color , push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}


function randomColor() {
	// pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	// pick a "green" value
	var g = Math.floor(Math.random()*256);
	// pick a "blue" value
	var b = Math.floor(Math.random()*256);
	return ("rgb(" + r + ", " + g + ", " + b + ")"); 
}