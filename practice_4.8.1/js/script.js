// let haveEnough = function(allCash, allWatches, allEarrings, costWatches, costEarrings) {
//     allCash = parseInt(prompt('enter your cash'));
//     allWatches = parseInt(prompt('enter your watches'));
//     allEarrings = parseInt(prompt('enter your bryuliks'));
//     costWatches = parseInt(prompt('enter price of watches')) * allWatches;
//     costEarrings = parseInt(prompt('enter price of bryuliks')) * allEarrings;
//     allPrice = costWatches + costEarrings;
//     (allCash >= allPrice) ? (document.body.innerHTML = 'Enough $$$'): document.body.innerHTML = 'Not enough $$$';
// }

// haveEnough();


let haveEnough = function(allCash, allWatches, allEarrings, costWatches, costEarrings) {
		let allPrice = costWatches + costEarrings;
		return (allCash >= allPrice) ? (document.body.innerHTML = 'Enough $$$'): (document.body.innerHTML = 'Not enough $$$');
}

const allCash = parseInt(prompt('enter your cash'));
const allWatches = parseInt(prompt('enter your watches'));
const allEarrings = parseInt(prompt('enter your bryuliks'));
const costWatches = parseInt(prompt('enter price of watches')) * allWatches;
const costEarrings = parseInt(prompt('enter price of bryuliks')) * allEarrings;

document.body.innerHTML = haveEnough(allCash, allWatches, allEarrings, costWatches, costEarrings);