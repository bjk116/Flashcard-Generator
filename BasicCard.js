//exports a basic card and related functions
console.log('Basic card');
exports.createCard = function(front, back) {
		var basicCard = {
			front: front,
			back: back,
		};
		return basicCard;
	};