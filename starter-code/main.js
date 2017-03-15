var cards = {'Queen', 'Queen', 'King', 'King'};
var cardsInPlay = [];


/*if ("King" == "King"){
	alert("You found a match!");
} else if ("Queen" == "Queen"){
	alert("You found a match!");
} else if ("Queen" == "King"){
	alert("Sorry, try again.")
}*/

document.getElementByID('game-board')

var createCards = function (){
	for(var i=0; i<cards.length; i++){

		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
	}
}

createCards();