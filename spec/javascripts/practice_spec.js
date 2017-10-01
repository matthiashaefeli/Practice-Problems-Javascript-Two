describe('factorial', function() {
	it('Return the factorial of the provided integer.', function() {
		expect(factorial(5)).toEqual(120);
	});
});

describe('palindrome', function() {
	it('return false if the word is a palindrome.', function() {
		expect(palindrome('hello')).toEqual(false);
	});
	it('return true if the given word is a palindrome(delete underscore).', function() {
		expect(palindrome('_eye')).toEqual(true);
	});
	it('return true if the given word is a palindrom(delete all signs)', function() {
		expect(palindrome('****ojo)&$')).toEqual(true);
	});
	it('return true if the given word is a palindrom', function() {
		expect(palindrome('A man, a plan, a canal. Panama')).toEqual(true);
	});
	it('return true if the given word is a palindrom', function() {
		expect(palindrome('1 eye for of 1 eye.')).toEqual(false);
	});
});

describe('findLongestWord', function() {
	it('returns the length of the longest word in a given string', function() {
		expect(findLongestWord('The quick brown fox jumped over the lazy dog')).toEqual(6);
	});
	it('returns the length of the longest word in a given string', function() {
		expect(findLongestWord('What if we try a super-long word such as otorhinolaryngology')).toEqual(19);
	});
});

describe('titleCase', function() {
	it('returns given string with all words the first letter capitalized', function() {
		expect(titleCase('sHoRt AnD sToUt')).toEqual('Short And Stout');
	});
	it('returns given string with all words the first letter capitalized', function() {
		expect(titleCase("I'm a little tea pot")).toEqual("I'm A Little Tea Pot");
	});
});

describe('largestOfFour', function() {
	it('returns an array with the biggest number of each given array', function() {
		expect(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])).toEqual([
			27,
			5,
			39,
			1001
		]);
	});
	it('returns an array with the biggest number of each given array', function() {
		expect(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])).toEqual([
			9,
			35,
			97,
			1000000
		]);
	});
});

describe('confirmEnding', function() {
	it('returns true if a given string (first argument) ends with the letter of the second argument', function() {
		expect(confirmEnding('Bastian', 'n')).toEqual(true);
	});
	it('returns true if a given string (first argument) ends with the letter of the second argument', function() {
		expect(confirmEnding('He has to give me a new name', 'name')).toEqual(true);
	});
	it('returns false if a given string (first argument) not ends with the letter of the second argument', function() {
		expect(
			confirmEnding(
				'Walking on water and developing software from a specification are easy if both are frozen',
				'specification'
			)
		).toEqual(false);
	});
	it('returns false if a given string (first argument) not ends with the letter of the second argument', function() {
		expect(confirmEnding('Open sesame', 'same')).toEqual(true);
	});
});

describe('repeatStringNumTimes', function() {
	it('returns a string n times', function() {
		expect(repeatStringNumTimes('*', 3)).toEqual('***');
	});
	it('returns a string n times', function() {
		expect(repeatStringNumTimes('abc', 2)).toEqual('abcabc');
	});
	it('returns a empty string if given number is negative', function() {
		expect(repeatStringNumTimes('*', -3)).toEqual('');
	});
});

describe('truncateString', function() {
	it('Truncate a string first argument if it is longer than the given maximum string length second argument. Return the truncated string with a ... ending.', function() {
		expect(truncateString('A-tisket a-tasket A green and yellow basket', 11)).toEqual('A-tisket...');
	});
	it('Truncate a string first argument if it is longer than the given maximum string length second argument. Return the truncated string with a ... ending.', function() {
		expect(truncateString('A-', 1)).toEqual('A...');
	});
	it('Truncate a string first argument if it is longer than the given maximum string length second argument. Return the truncated string with a ... ending.', function() {
		expect(
			truncateString(
				'A-tisket a-tasket A green and yellow basket',
				'A-tisket a-tasket A green and yellow basket'.length
			)
		).toEqual('A-tisket a-tasket A green and yellow basket');
	});
	it('Truncate a string first argument if it is longer than the given maximum string length second argument. Return the truncated string with a ... ending.', function() {
		expect(truncateString('Absolutely Longer', 2)).toEqual('Ab...');
	});
});

describe('chunkArrayInGroups', function() {
	it('splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array', function() {
		expect(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
	});
	it('splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array', function() {
		expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]);
	});
	it('splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array', function() {
		expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
	});
});

describe('slasher', function() {
	it('Return the remaining elements of an array after chopping off n elements from the head.', function() {
		expect(slasher([1, 2, 3], 2)).toEqual([3]);
	});
	it('Return the remaining elements of an array after chopping off n elements from the head.', function() {
		expect(slasher([1, 2, 3], 0)).toEqual([1, 2, 3]);
	});
	it('Return the remaining elements of an array after chopping off n elements from the head.', function() {
		expect(slasher([1, 2, 3], 9)).toEqual([]);
	});
});

describe('mutation', function() {
	it('Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array', function() {
		expect(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])).toEqual(true);
	});
	it('Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array', function() {
		expect(mutation(['floor', 'for'])).toEqual(true);
	});
	it('Return false if the string in the first element of the array not contains all of the letters of the string in the second element of the array', function() {
		expect(mutation(['hello', 'hey'])).toEqual(false);
	});
});

describe('bouncer', function() {
	it('Remove all falsy values from an array', function() {
		expect(bouncer([7, 'ate', '', false, 9])).toEqual([7, 'ate', 9]);
	});
	it('Remove all falsy values from an array', function() {
		expect(bouncer([false, null, 0, NaN, undefined, ''])).toEqual([]);
	});
	it('Remove all falsy values from an array', function() {
		expect(bouncer([1, null, NaN, 2, undefined])).toEqual([1, 2]);
	});
	it('Remove all falsy values from an array', function() {
		expect(bouncer(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
	});
});

describe('destroyer', function() {
	it('Remove all elements from the initial array that are of the same value as these arguments', function() {
		expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
	});
	it('Remove all elements from the initial array that are of the same value as these arguments', function() {
		expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
	});
	it('Remove all elements from the initial array that are of the same value as these arguments', function() {
		expect(destroyer(['tree', 'hamburger', 53], 'tree', 53)).toEqual(['hamburger']);
	});
});

describe('getIndexToIns', function() {
	it('Return the lowest index at which a value (second argument) should be inserted into an array', function() {
		expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toEqual(3);
	});
	it('Return the lowest index at which a value (second argument) should be inserted into an array', function() {
		expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toEqual(2);
	});
	it('Return the lowest index at which a value (second argument) should be inserted into an array', function() {
		expect(getIndexToIns([3, 10, 5], 3)).toEqual(0);
	});
	it('Return the lowest index at which a value (second argument) should be inserted into an array', function() {
		expect(getIndexToIns([5, 3, 20, 3], 5)).toEqual(2);
	});
	it('Return the lowest index at which a value (second argument) should be inserted into an array', function() {
		expect(getIndexToIns([2, 5, 10], 15)).toEqual(3);
	});
});

describe('rot13', function() {
	it('takes a ROT13 encoded string as input and returns a decoded string', function() {
		expect(rot13('SERR PBQR PNZC')).toEqual('FREE CODE CAMP');
	});
	it('takes a ROT13 encoded string as input and returns a decoded string', function() {
		expect(rot13('SERR CVMMN!')).toEqual('FREE PIZZA!');
	});
});

describe('sumAll', function(){
	it('Return the sum of the given two numbers and all numbers between them.', function() {
		expect(sumAll([1, 4])).toEqual(10)
	});
	it('Return the sum of the given two numbers and all numbers between them.', function() {
		expect(sumAll([10, 5])).toEqual(45)
	});
});

describe('diffArray', function() {
	it('return the symmetric difference of the two arrays', function() {
		expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4])
	})
	it('return the symmetric difference of the two arrays', function() {
		expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(["pink wool"])
	})
	it('return the symmetric difference of the two arrays', function() {
		expect(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(["pink wool", "diorite"])
	})
})

describe('convertToRoman', function() {
	it('Convert the given number into a roman numeral', function() {
		expect(convertToRoman(2)).toEqual("II")
	})
	it('Convert the given number into a roman numeral', function() {
		expect(convertToRoman(5)).toEqual("V")
	})
	it('Convert the given number into a roman numeral', function() {
		expect(convertToRoman(8)).toEqual("VIII")
	})
	it('Convert the given number into a roman numeral', function() {
		expect(convertToRoman(9)).toEqual("IX")
	})
	it('Convert the given number into a roman numeral', function() {
		expect(convertToRoman(10)).toEqual("X")
	})
	it('Convert the given number into a roman numeral', function() {
		expect(convertToRoman(16)).toEqual("XVI")
	})
	it('Convert the given number into a roman numeral', function() {
		expect(convertToRoman(44)).toEqual("XLIV")
	})
	it('Convert the given number into a roman numeral', function() {
		expect(convertToRoman(68)).toEqual("LXVIII")
	})
	it('Convert the given number into a roman numeral', function() {
		expect(convertToRoman(83)).toEqual("LXXXIII")
	})
	it('Convert the given number into a roman numeral', function() {
		expect(convertToRoman(500)).toEqual("D")
	})
	it('Convert the given number into a roman numeral', function() {
		expect(convertToRoman(649)).toEqual("DCXLIX")
	})
	it('Convert the given number into a roman numeral', function() {
		expect(convertToRoman(2014)).toEqual("MMXIV")
	})
})

describe('whatIsInAName', function() {
	it('looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs',function() {
		expect(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })).toEqual([{ first: "Tybalt", last: "Capulet" }])
	})
	it('looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs',function() {
		expect(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })).toEqual([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }])
	})
	it('looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs',function() {
		expect(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })).toEqual([{ "a": 1, "b": 2, "c": 2 }])
	})
})

describe('myReplace', function() {
	it('Perform a search and replace on the sentence using the arguments provided and return the new sentence', function() {
		expect(myReplace("Let us go to the store", "store", "mall")).toEqual("Let us go to the mall")
	})
	it('Perform a search and replace on the sentence using the arguments provided and return the new sentence', function() {
		expect(myReplace("Let us get back to more Coding", "Coding", "algorithms")).toEqual("Let us get back to more Algorithms")
	})
	it('Perform a search and replace on the sentence using the arguments provided and return the new sentence', function() {
		expect(myReplace("This has a spellngi error", "spellngi", "spelling")).toEqual("This has a spelling error")
	})
})

describe('translatePigLatin', function() {
	it('Translate the provided string to pig latin', function() {
		expect(translatePigLatin("california")).toEqual("aliforniacay")
	})
	it('Translate the provided string to pig latin', function() {
		expect(translatePigLatin("paragraphs")).toEqual("aragraphspay")
	})
	it('Translate the provided string to pig latin', function() {
		expect(translatePigLatin("eight")).toEqual("eightway")
	})
})

describe('pairElement', function() {
	it('The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.', function() {
		expect(pairElement("ATCGA")).toEqual([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]])
	})
	it('The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.', function() {
		expect(pairElement("TTGAG")).toEqual([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]])
	})
	it('The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.', function() {
		expect(pairElement("CTCTA")).toEqual([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]])
	})
})

describe('fearNotLetter', function() {
	it('Find the missing letter in the passed letter range and return it.', function() {
		expect(fearNotLetter("abce")).toEqual("d")
	})
	it('Find the missing letter in the passed letter range and return it.', function() {
		expect(fearNotLetter("yz")).toEqual(undefined)
	})
	it('Find the missing letter in the passed letter range and return it.', function() {
		expect(fearNotLetter("abcdefghjklmno")).toEqual("i")
	})
})

describe('booWho', function() {
	it('Check if a value is classified as a boolean primitive. Return true or false', function() {
		expect(booWho(true)).toEqual(true)
	})
	it('Check if a value is classified as a boolean primitive. Return true or false', function() {
		expect(booWho(false)).toEqual(true)
	})
	it('Check if a value is classified as a boolean primitive. Return true or false', function() {
		expect(booWho([1, 2, 3])).toEqual(false)
	})
	it('Check if a value is classified as a boolean primitive. Return true or false', function() {
		expect(booWho(NaN)).toEqual(false)
	})
})

describe('uniteUnique', function() {
	it('new array of unique values in the order of the original provided arrays', function() {
		expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4])
	})
	it('new array of unique values in the order of the original provided arrays', function() {
		expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual([1, 3, 2, [5], [4]])
	})
	it('new array of unique values in the order of the original provided arrays', function() {
		expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5])
	})
	it('new array of unique values in the order of the original provided arrays', function() {
		expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([1, 2, 3, 5, 4, 6, 7, 8])
	})
})

describe('convertHTML', function() {
	it('Convert the characters &, <, >,(double quote), and (apostrophe), in a string to their corresponding HTML entities', function() {
		expect(convertHTML("Dolce & Gabbana")).toEqual("Dolce &amp; Gabbana")
	})
	it('Convert the characters &, <, >,(double quote), and (apostrophe), in a string to their corresponding HTML entities', function() {
		expect(convertHTML("Hamburgers < Pizza < Tacos")).toEqual("Hamburgers &lt; Pizza &lt; Tacos")
	})
	it('Convert the characters &, <, >,(double quote), and (apostrophe), in a string to their corresponding HTML entities', function() {
		expect(convertHTML("Shindler's List")).toEqual("Shindler&apos;s List")
	})
	it('Convert the characters &, <, >,(double quote), and (apostrophe), in a string to their corresponding HTML entities', function() {
		expect(convertHTML("abc")).toEqual("abc")
	})
})

describe('spinalCase', function() {
	it('Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes', function() {
		expect(spinalCase("This Is Spinal Tap")).toEqual("this-is-spinal-tap")
	})
	it('Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes', function() {
		expect(spinalCase("thisIsSpinalTap")).toEqual("this-is-spinal-tap")
	})
	it('Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes', function() {
		expect(spinalCase("The_Andy_Griffith_Show")).toEqual("the-andy-griffith-show")
	})
	it('Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes', function() {
		expect(spinalCase("AllThe-small Things")).toEqual("all-the-small-things")
	})
	it('Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes', function() {
		expect(spinalCase("Teletubbies say Eh-oh")).toEqual("teletubbies-say-eh-oh")
	})
})

describe('sumFibs', function() {
	it('return the sum of all odd Fibonacci numbers that are less than or equal to num', function() {
		expect(sumFibs(1000)).toEqual(1785)
	})
	it('return the sum of all odd Fibonacci numbers that are less than or equal to num', function() {
		expect(sumFibs(4000000)).toEqual(4613732)
	})
	it('return the sum of all odd Fibonacci numbers that are less than or equal to num', function() {
		expect(sumFibs(4)).toEqual(5)
	})
	it('return the sum of all odd Fibonacci numbers that are less than or equal to num', function() {
		expect(sumFibs(75025)).toEqual(135721)
	})
})

describe('sumPrimes', function() {
	it('Sum all the prime numbers up to and including the provided number.', function() {
		expect(sumPrimes(10)).toEqual(17)
	})
	it('Sum all the prime numbers up to and including the provided number.', function() {
		expect(sumPrimes(977)).toEqual(73156)
	})
})

describe('smallestCommons', function(){
	it('Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters', function() {
		expect(smallestCommons([1, 5])).toEqual(60)
	})
	it('Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters', function() {
		expect(smallestCommons([1, 13])).toEqual(360360)
	})
	it('Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters', function() {
		expect(smallestCommons([23, 18])).toEqual(6056820)
	})
})

describe('findElement', function() {
	it('looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument)', function() {
		expect(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })).toEqual(8)
	})
	it('looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument)', function() {
		expect(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })).toEqual(undefined)
	})
})

describe('dropElements', function() {
	it('Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true', function() {
		expect(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})).toEqual([3, 4])
	})
	it('Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true', function() {
		expect(dropElements([0, 1, 0, 1], function(n) {return n === 1;})).toEqual([1, 0, 1])
	})
	it('Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true', function() {
		expect(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})).toEqual([3, 9, 2])
	})
	it('Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true', function() {
		expect(dropElements([1, 2, 3, 4], function(n) {return n > 5;})).toEqual([])
	})
})

describe('steamrollArray', function() {
	it('Flatten a nested array. You must account for varying levels of nesting.', function() {
		expect(steamrollArray([[["a"]], [["b"]]])).toEqual(["a", "b"])
	})
	it('Flatten a nested array. You must account for varying levels of nesting.', function() {
		expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4])
	})
	it('Flatten a nested array. You must account for varying levels of nesting.', function() {
		expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4])
	})
	it('Flatten a nested array. You must account for varying levels of nesting.', function() {
		expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4])
	})
})

describe('binaryAgent', function() {
	it('Return an English translated sentence of the passed binary string.', function() {
		expect(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")).toEqual("Aren't bonfires fun!?")
	})
	it('Return an English translated sentence of the passed binary string.', function() {
		expect(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")).toEqual("I love FreeCodeCamp!")
	})
})


