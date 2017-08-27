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
		expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4).toEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]));
	});
});
