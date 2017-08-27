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

function largestOfFour(numberArray) {
	var resultArray = [];
	for (var i = 0; i < numberArray.length; i++) {
		resultArray.push(numberArray[i].sort(sortNumber).reverse()[0]);
	}
	return resultArray;
}

function confirmEnding(string, end) {
	var stringArray = string.split(' ');
	var lastWord = stringArray[stringArray.length - 1];
	if (end.length == 1) {
		if (lastWord[lastWord.length - 1] == end) {
			return true;
		} else {
			return false;
		}
	} else {
		var stringEnd = [];
		for (i = lastWord.length - 1, itwo = 0; itwo < end.length; i--, itwo++) {
			stringEnd.unshift(lastWord[i]);
		}
		if (stringEnd.join('') == end) {
			return true;
		} else {
			return false;
		}
	}
}

function repeatStringNumTimes(string, num) {
	if (num < 0) {
		return '';
	} else {
		var stringArray = [];
		for (var i = 0; i < num; i++) {
			stringArray.push(string);
		}
		return stringArray.join('');
	}
}

function truncateString(string, num) {
	if (string.length <= num) {
		return string;
	} else if (string.length < 3) {
		var myRe = /\w/g;
		var newStr = string.match(myRe);
		return newStr + '...';
	} else if (num < 3) {
		var stringArray = [];
		for (var i = 0; i < 2; i++) {
			stringArray.push(string.split('')[i]);
		}
		return stringArray.join('') + '...';
	} else {
		var stringArray = [];
		for (var i = 0; i < num - 3; i++) {
			stringArray.push(string.split('')[i]);
		}
		return stringArray.join('') + '...';
	}
}
