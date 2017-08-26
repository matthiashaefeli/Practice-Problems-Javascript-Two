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
		expect(findLongestWord('TWhat if we try a super-long word such as otorhinolaryngology')).toEqual(19);
	});
});
