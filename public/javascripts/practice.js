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
	var sortedArray = numberArray.sort(sortNumber);
	var newArray = [];
	for (var i = sortedArray[0]; i < sortedArray[1] + 1; i++) {
		newArray.push(i);
	}
	var sum = 0;
	for (var i = 0; i < newArray.length; i++) {
		sum += newArray[i];
	}
	return sum;
}

function diffArray(array1, array2) {
	var finalArray = [];
	for (var i = 0; i < array1.length; i++) {
		if (array2.includes(array1[i]) == false) {
			finalArray.push(array1[i]);
		}
	} for (var i = 0; i < array2.length; i++) {
		if (array1.includes(array2[i]) == false) {
			finalArray.push(array2[i]);
		}
	}return finalArray;
}

function convertToRoman(num) {
	var result = "";
	var thousands = Math.floor(num % 10000 /1000);
         if (thousands < 4) {
      		for (i = 0; i < thousands; i++) {
      			result += "M";
      		}
      	}else if (thousands < 5) {
      		result += "MV";
      	}else if (undreds < 9) {
      		result += "V";
      		for (i = 5; i < thousands; i++) {
      			result += "M";
      		}
      	}else {
      		result += "M(X)";
      	}
   var hundreds = Math.floor(num/100 % 10);
      	if (hundreds < 4) {
      		for (i = 0; i < hundreds; i++) {
      			result += "C";
      		}
      	}else if (hundreds < 5) {
      		result += "CD";
      	}else if (hundreds < 9) {
      		result += "D";
      		for (i = 5; i < hundreds; i++) {
      			result += "C";
      		}
      	}else {
      		result += "CM";
      	}
   var tens = Math.floor(num/10 % 10);
      	if (tens < 4) {
      		for (i = 0; i < tens; i++) {
      			result += "X";
      		}
      	}else if (tens < 5) {
      		result += "XL";
      	}else if (tens < 9) {
      		result += "L";
      		for (i = 5; i < tens; i++) {
      			result += "X";
      		}
      	}else {
      		result += "XC";
      	}
    var ones = Math.floor(num % 10);
  			if(ones < 4) {
  				for (i = 0; i < ones; i++) {
  					result += "I";
  				}
  			}else if (ones < 5) {
  				result += "IV";
  			}else if (ones < 9) {
  				result += "V";
  				for (i = 5; i < ones; i++) {
  					result += "I";
  				}
  				}else {
  					result += "IX";
  			}
      tenThousands = Math.floor(num / 10000 % 10),
      hundredThousands = Math.floor(num / 100000 % 10),
      millions = Math.floor(num / 1000000 % 10),
      tenMillions = Math.floor(num / 10000000 % 10),
      hundredMillions = Math.floor(num / 100000000 % 10);
 			return result;
}



function checkIfObjectContains(one, two){
   for (var i in one) {
           if (! two.hasOwnProperty(i) || one[i] !== two[i] ) {
              return false;
           }       
   }
   return true;
}

function whatIsInAName(objects, source) {
	var result = [];
	for (i = 0; i < objects.length; i++) {
		if (checkIfObjectContains(source, objects[i])) {
			result.push(objects[i]);
		}
	}
	return result;
}


function isUppercase(string) {

	if (string[0] === string[0].toUpperCase()) {
		return true;
	}else {
		return false;
	}
}


function toUppercase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function myReplace(str, before, after) {
	var newAfter = "";
	if (isUppercase(before) === true) {
		newAfter = toUppercase(after);
	}else {
		newAfter = after;
	}
	var result = [];
	var newStr = str.split(" ");
	for (var i = 0; i < newStr.length; i++) {
		if (newStr[i] === before) {
			result.push(newAfter);
		}else {
			result.push(newStr[i]);
		}
	}return result.join(" ");
}


function translatePigLatin(string) {
	var vowels = ['a','e','i','o','u'];
	var result = [];
	var consonant = [];
	for (var i = 0; i < string.length; i++) {
		if (vowels.includes(string[0])) {
		return string+"way";
	}else if (! vowels.includes(string[i])) {
			consonant.push(string[i]);
		}else {
			result.push(string.substring(i, string.length))
			i = string.length;
		}
	}return result.join("")+consonant.join("")+"ay";
}

function pairElement(str) {
	var result = [];
	var dn = [];
	for (var i = 0; i < str.length; i++) {
		if (str[i] === "A") {
			dn.push(str[i]);
			dn.push("T");
			result.push(dn);
			dn = [];
		}else if (str[i] === "T") {
			dn.push(str[i]);
			dn.push("A");
			result.push(dn);
			dn = [];
		}else if (str[i] === "G") {
			dn.push(str[i]);
			dn.push("C");
			result.push(dn);
			dn =[];
		}else if (str[i] === "C") {
			dn.push(str[i]);
			dn.push("G");
			result.push(dn);
			dn =[];
		}
	}
	return result
}

function fearNotLetter(str) {
	var alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];
	var letterIndex = alphabet.indexOf(str[0]);
	for (var i = 0, itwo = letterIndex; i < str.length; i++, itwo++) {
		if (alphabet[itwo] != str[i]) {
			return alphabet[itwo]
		}
	}
}

function booWho(bool) {
	if (typeof(bool) === "boolean") {
		return true
	}else {
		return false
	}
}

function uniteUnique(array) {
	var newArray = []
	for (var i = 0; i < arguments.length; i++) {
		for (var itwo = 0; itwo < arguments[i].length; itwo++) {
			if (! newArray.includes(arguments[i][itwo])) {
				newArray.push(arguments[i][itwo])
			}
		}
	}return newArray
}

// this works perfect but the other one is a better solution

// function convertHTML(string) {
// 	return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;")
// }

function convertHTML(string) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  return string.replace(/[&<>"']/g, function(m) { return map[m]; });
}


function toLowercase(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function spinalCase(string) {
	var newStr = toLowercase(string);
return newStr.replace(/ /g, '-').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/ |_/g, "").replace(/--/g, "-");
}

function sumFibs(number) {
	var result = 0;
	var oddNumbers = [];
	var newOddNumbers = [];
	var fib = [1, 1];
	while (fib[fib.length - 1] < number) {
		fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
	}for (var i = 0; i < fib.length; i++) {
		if (fib[i]%2 !== 0  ) {
			oddNumbers.push(fib[i]);
		}
	}for (var a = 0; a < oddNumbers.length; a++) {
		if (oddNumbers[a] <= number) {
			newOddNumbers.push(oddNumbers[a]);
		}
	}for (var b = 0; b < newOddNumbers.length; b++) {
		result += newOddNumbers[b];
	} return result;
}


function isPrime(n){
  if (n===1) {
    return false;
  }else if(n === 2) {
    return true;
  }else {
    for(var x = 2; x < n; x++) {
      if(n % x === 0) {
        return false;
      }
    }return true;  
  }
}

function sumPrimes(number) {
	var result = 0;
	var primesNumbers = [];
	for (var i = 0; i < number + 1; i++) {
		if (isPrime(i) === true) {
			primesNumbers.push(i);
		}
	} 
	for (var a = 0; a < primesNumbers.length; a++) {
		result += primesNumbers[a];
	}return result;
}
