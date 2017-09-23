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

function chunkArrayInGroups(array, num) {
	var finalArray = [];
	var numArray = [];
	for (i = 0; i < array.length; i++) {
		numArray.push(array[i]);
		if (numArray.length == num || i == array.length - 1) {
			finalArray.push(numArray);
			numArray = [];
		}
	}
	return finalArray;
}

function slasher(array, num) {
	if (num > array.length) {
		return [];
	} else {
		for (var i = 0; i < num; i++) {
			array.shift();
		}
		return array;
	}
}

function mutation(array) {
	var includeLetters = array[0].toLowerCase();
	var letters = array[1].toLowerCase().split('');
	var sum = 0;
	for (var i = 0; i < letters.length; i++)
		if (includeLetters.includes(letters[i])) {
			sum += 1;
		}
	if (sum == letters.length) {
		return true;
	} else {
		return false;
	}
}

function bouncer(array) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		a = array[i] ? 'truthy' : 'falsy';
		if (a == 'truthy') {
			result.push(array[i]);
		}
	}
	return result;
}

function destroyer() {
	var result = [];
	var arg = [];
	for (var i = 1; i < arguments.length; i++) {
		arg.push(arguments[i]);
	}
	for (var i = 0; i < arguments[0].length; i++) {
		if (arg.includes(arguments[0][i])) {
		} else {
			result.push(arguments[0][i]);
		}
	}
	return result;
}

function getIndexToIns(array, num) {
	var sortedArray = array.sort(sortNumber);
	for (var i = 0; i < array.length; i++) {
		if (num <= sortedArray[i]) {
			return sortedArray.indexOf(sortedArray[i]);
		} else if (num > sortedArray[array.length - 1]) {
			return array.length;
		}
	}
}

function rot13(string) {
	var result = [];
	var alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z'
	];
	var splitString = string.split('');
	for (var i = 0; i < splitString.length; i++) {
		if (alphabet.includes(splitString[i])) {
			var newIndex = alphabet.indexOf(splitString[i]) + 13;
			if (newIndex >= alphabet.length) {
				newIndex = newIndex - alphabet.length;
			}
			result.push(alphabet[newIndex]);
		} else {
			result.push(splitString[i]);
		}
	}
	return result.join('');
}

function sumAll(numberArray) {
	var sortedArray = numberArray.sort(sortNumber)
	var newArray = []
	for (var i = sortedArray[0]; i < sortedArray[1] + 1; i++) {
		newArray.push(i)
	}
	var sum = 0
	for (var i = 0; i < newArray.length; i++) {
		sum += newArray[i]
	}
	return sum
}

function diffArray(array1, array2) {
	var finalArray = [];
	for (var i = 0; i < array1.length; i++) {
		if (array2.includes(array1[i]) == false) {
			finalArray.push(array1[i])
		}
	} for (var i = 0; i < array2.length; i++) {
		if (array1.includes(array2[i]) == false) {
			finalArray.push(array2[i])
		}
	}return finalArray

}
