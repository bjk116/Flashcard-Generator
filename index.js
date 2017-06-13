//use this to use BasicCard.js and CloseCard.js
var choice = process.argv[2];
var clozeCard = require('./ClozeCard.js');
var basicCard = require('./BasicCard.js');
console.log('running index');

switch(choice) {
	case 'c':
		//cloze card
		console.log('Cloze card selected');
		var cCard = clozeCard.createCloze('George Washington chopped down a cherry tree', 'George Washington');
		console.log(JSON.stringify(cCard, null, 2));
		break;
	case 'b':
		//basic card
		console.log('Basic card selected');
		var bCard = basicCard.createCard('Heres some front text', 'Heres some back text');
		console.log(JSON.stringify(bCard, null, 2));
		break;
	default:
		console.log('Select c for cloze card of b for basic card');
}