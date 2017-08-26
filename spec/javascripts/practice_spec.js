describe('factorial', function() {
	it('Return the factorial of the provided integer.', function() {
		expect(factorial(5)).toEqual(120);
	});
});

describe('palindrome', function() {
	it('return false if the word is a palindrome.', function() {
		expect(palindrome('hello')).toEqual(false);
	});
	it('return true if the given word is a palindrome.', function() {
		expect(palindrome('_eye')).toEqual(true);
	});
	it('return true if the given word is a palindrom(delete all numbers and signs)', function() {
		expect(palindrome('****ojo)&$')).toEqual(true);
	});
	it('return true if the given word is a palindrom(delete all numbers and signs)', function() {
		expect(palindrome('A man, a plan, a canal. Panama')).toEqual(true);
	});
	it('return true if the given word is a palindrom(delete all numbers and signs)', function() {
		expect(palindrome('1 eye for of 1 eye.')).toEqual(false);
	});
});
