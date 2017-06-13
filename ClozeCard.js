//exports a function and properties for a cloze card

//for this function, see if I can change it to make a ... per word in clozeString
function createEllipse (mainString, clozeString) {
	//if the cloze is in the main string, as it should be to operate
	if (mainString.indexOf(clozeString) !== -1){
		return mainString.replace(clozeString, '...');	
	} else {
		console.log('Cloze not located in main string');
		return -1;
	}
	
}

exports.createCloze = function(front, cloze) {
	console.log('Running cloze');
	var front_display = createEllipse(front, cloze);
	
	if (front_display === -1) {
		console.log('Stopping createCloze');
		return '';
	} else {
		var clozeCard ={
			display: front_display,
			cloze: cloze,
		};
		return clozeCard;
	}


}