const MapUnitToWords = ["zero", "one", "two", "three", "four", "five", "six",
"seven", "eight", "nine", "ten", "eleven", "twelve",
"thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
"eighteen", "nineteen"]

const MapTensToWords = [ "zero", "ten", "twenty", "thirty", "forty", "fifty",
"sixty", "seventy", "eighty", "ninety"];

const billion  = 1000000000;
const million  = 1000000;
const thousand = 1000;
const hundred  = 100;

const invalidInput  = "number invalid";


const convertToWords =  (stringValue) => {
    if (typeof stringValue != "string") {
        return invalidInput;
    }
    let stringValueArray = stringValue.trim().split(" ");
    let numberToConvert = "";
    var numberInvalid = "";
    
    stringValueArray.forEach(stringInput => {
        
        // check if string is a number 
        if (containsDigit(stringInput)){
        
             // check if a number has already been found
             if (numberToConvert != "") {
                numberInvalid = invalidInput;
                numberToConvert = "";
            }else {
                numberToConvert = stringInput;
                numberInvalid = "";
            }
        }
        
    });

    if (numberInvalid || !numberToConvert) {
        return numberInvalid;
    }

    return numToWords(numberToConvert);

}

//check if a string contains digit
const containsDigit = (str)  => {
    return str.match(/\d+/g);
}

const numToWords =  (numb) => {
    // variable to hold string representation of number 
    let words = "";

    if (isNaN(numb)) {
        return invalidInput;
    }
    
    if (numb == 0 || numb < 0) {
        return "";
    }
    
    // check if number is in 1 billions
    if (~~(numb / billion) > 0) {
        words += numToWords(~~(numb / billion)) + " billion ";
        numb %= billion;
    }
    // check if number is in 1 millions
    if (~~(numb / million) > 0) {
        words += numToWords(~~(numb / million)) + " million ";
        numb %= million;
    }
    // check if number is in thousands
    if (~~(numb / thousand) > 0) {
        words += numToWords(~~(numb / thousand)) + " thousand ";
        numb %= thousand;
    }
    // check if number is in hundreds
    if (~~(numb / hundred) > 0) {
        words += numToWords(~~(numb / hundred)) + " hundred ";
        numb %= hundred;

    }

    if (numb > 0) {
        
        if (words != "") {
            words += "and "
        }
        
        // check if number is within tens 
        if (numb < 20) {
            // fetch the appropriate value from unit array
            words += MapUnitToWords[numb];
        } else {
            // fetch the appropriate value from tens array
            words += MapTensToWords[~~(numb / 10)];
            if ((numb % 10) > 0) {
                words += "-" + MapUnitToWords[numb % 10];
            }
        }
    }
    return words;
}



module.exports = {
    numToWords,
    convertToWords
};