const palindromes = function (phrase) {
    const cleanedPhrase = phrase.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedString = cleanedPhrase.split("").reduce((acc, char) => char + acc, "");
    return cleanedPhrase === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
