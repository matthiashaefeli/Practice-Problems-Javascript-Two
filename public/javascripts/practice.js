function factorial(num) {
	var result = 1;
	for (var i = 1; i < num + 1; i++) {
		result *= i;
	}

	return result;
}

function palindrome(str) {
	var myRe = /(?!_)\w/g;
	var newStr = str.toLowerCase().match(myRe);
	if (newStr.join('') == newStr.reverse().join('')) {
		return true;
	} else {
		return false;
	}
}

function sortNumber(a, b) {
	return a - b;
}

function findLongestWord(string) {
	var wordArray = string.split(' ');
	var lengthArray = [];
	for (var i = 0; i < wordArray.length; i++) {
		lengthArray.push(wordArray[i].length);
	}
	return lengthArray.sort(sortNumber).reverse()[0];
}

function capitalizeFirstLetter(string) {
	return string[0].toUpperCase() + string.slice(1);
}

function titleCase(string) {
	var wordArray = string.toLowerCase().split(' ');
	var resultArray = [];
	for (var i = 0; i < wordArray.length; i++) {
		resultArray.push(capitalizeFirstLetter(wordArray[i]));
	}
	return resultArray.join(' ');
}
