// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber: matches valid phone numbers
// 2 tests should be TRUE
test('(858) 534-2230 should be a valid phone #', () => {
    expect(functions.isPhoneNumber('(858) 534-2230')).toBe(true);
});
test('(858) 404-0834 should be a valid phone #', () => {
    expect(functions.isPhoneNumber('(858) 404-0834')).toBe(true);
});
// 2 tests should be FALSE
test('(619) 619 should be an invalid phone #', () => {
    expect(functions.isPhoneNumber('(619) 619')).toBe(false);
});
test('(858) 8585-858 should be an invalid phone #', () => {
    expect(functions.isPhoneNumber('(858) 8585-858')).toBe(false);
});

// isEmail: matches valid emails
// 2 tests should be TRUE
test('kebuengan@ucsd.edu should be a valid email', () => {
    expect(functions.isEmail('kebuengan@ucsd.edu')).toBe(true);
});
test('validEmail@yahoo.com should be a valid email', () => {
    expect(functions.isEmail('validEmail@yahoo.com')).toBe(true);
});
// 2 tests should be FALSE
test('invalidEmail should be an invalid email', () => {
    expect(functions.isEmail('invalidEmail')).toBe(false);
});
test('@gmail.com should be an invalid email', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});

/**
 * isStrongPassword: The password's first character must be a letter,
 * it must contain at least * 4 characters and no more than 15
 * characters and no characters other than * * letters, numbers and
 * the underscore may be used
 */
// 2 tests should be TRUE
test('abcd should be a strong password', () => {
    expect(functions.isStrongPassword('abcd')).toBe(true);
});
test('a_123 should be a strong password', () => {
    expect(functions.isStrongPassword('a_123')).toBe(true);
});
// 2 tests should be FALSE
test('1abc should be a weak/invalid password', () => {
    expect(functions.isStrongPassword('1abc')).toBe(false);
});
test('a@bc should be a weak/invalid password', () => {
    expect(functions.isStrongPassword('a@bc')).toBe(false);
});

// 	isDate: This regular expressions matches dates of the form 
// XX / XX / YYYY where XX can be 1 or 2 digits long and YYYY is
// always 4 digits long.
// 2 tests should be TRUE
test('1/1/2023 should be a valid date', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
});
test('01/01/2023 should be a valid date', () => {
    expect(functions.isDate('01/01/2023')).toBe(true);
});
// 2 tests should be FALSE
test('01/01/23 should be an invalid date', () => {
    expect(functions.isDate('01/01/23')).toBe(false);
});
test('2023/01/01 should be an invalid date', () => {
    expect(functions.isDate('2023/01/01')).toBe(false);
});

// isHexColor: Matches valid 3 or 6 character hex codes used for HTML or CSS.
// 2 tests should be TRUE
test('#bad0b9 should be a valid hex color', () => {
    expect(functions.isHexColor('#bad0b9')).toBe(true);
});
test('#ffc7a2 should be a valid hex color', () => {
    expect(functions.isHexColor('#ffc7a2')).toBe(true);
});
// 2 tests should be FALSE
test('#ffc7a2ff should be an invalid hex color', () => {
    expect(functions.isHexColor('#ffc7a2ff')).toBe(false);
});
test('#cat should be an invalid hex color', () => {
    expect(functions.isHexColor('#cat')).toBe(false);
});