var assert = require('assert');
var convertors = require('../../src/convertors/NumberConvertor');


describe('NumberConvertor', () => {
  describe('#convertToWords', () => {
    var convertToWords = convertors.convertToWords;

    it('should accept string as input ', function() {
      assert.notEqual(convertToWords("The pump is 536 deep underground."), 'number invalid');
    });

    it('should extract and accept one number in sentence as input ', function() {
      assert.notEqual(convertToWords("The pump is 536 deep underground."), 'number invalid');
    });

    it('should reject multiple number input ', function() {
      assert.equal(convertToWords("2 The pump is 536 deep underground."), 'number invalid');
      assert.equal(convertToWords("I received 23 456,9 KGs."), 'number invalid');
    });

    it('should return  number invalid for invalid number inputs ', function() {
      assert.equal(convertToWords("Variables reported as having a missing type #65678."), 'number invalid');
    });
    
    it('should return the words for the number in the string ', function() {
      assert.equal(convertToWords("The pump is 536 deep underground."), 'five hundred and thirty-six');
      assert.equal(convertToWords("We processed 9121 records."), 'nine thousand, one hundred and twenty-one');
      assert.equal(convertToWords("Interactive and printable 10022 ZIP code."), 'ten thousand and twenty-two');
      assert.equal(convertToWords("The database has 66723107008 records."), 'sixty-six billion, seven hundred and'+
      ' twenty-three million, one hundred and seven thousand and eight');
    });

  })
  
  describe('#numberToWords', () => {
    var numberToWords = convertors.numToWords;

    it('should return "number invalid" in for invalid input', function() {
      assert.equal(numberToWords("!100"), 'number invalid');
      assert.equal(numberToWords("#65678"), 'number invalid');
    });

    it('should output for single digits', function() {
      assert.equal(numberToWords(5), "five");
      assert.equal(numberToWords(1), "one");
      assert.equal(numberToWords(0), "zero");
    });

    it('should output for two digits', function() {
      assert.equal(numberToWords(50), "fifty");
      assert.equal(numberToWords(79), "seventy-nine");
    });

    it('should output for 3 digits', function() {
      assert.equal(numberToWords(100), "one hundred");
      assert.equal(numberToWords(220), "two hundred and twenty");
      assert.equal(numberToWords(536), "five hundred and thirty-six");
    });

    it('should output for 4 digits - thousands', function() {
      assert.equal(numberToWords(1000), "one thousand");
      assert.equal(numberToWords(4569), "four thousand, five hundred and sixty-nine");
      assert.equal(numberToWords(9121), "nine thousand, one hundred and twenty-one");
      assert.equal(numberToWords(10022), "ten thousand and twenty-two");
    });
    
    it('should output for 7 digits - million', function() {
      assert.equal(numberToWords(1000000), "one million");
      assert.equal(numberToWords(10000001), "ten million and one");

    });

    it('should output for 10 digits - billion', function() {
      assert.equal(numberToWords(1000000000), "one billion");
      assert.equal(numberToWords(1000000001), "one billion and one");
      assert.equal(numberToWords(66723107008), "sixty-six billion, seven hundred "+
      "and twenty-three million, one hundred and seven thousand and eight");

    });

    it('should output for negative numbers', function() {

      assert.equal(numberToWords(-85), "minus eighty-five");
      assert.equal(numberToWords(-1000000000), "minus one billion");
      assert.equal(numberToWords(-1000000001), "minus one billion and one");
      assert.equal(numberToWords(-66723107008), "minus sixty-six billion, seven hundred "+
      "and twenty-three million, one hundred and seven thousand and eight");

    });
  })
  
});