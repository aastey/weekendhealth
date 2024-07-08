"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWords = void 0;
// Find words in word array that can be spelled using the
// letters in the key word
var findWords = function (keyWord, wordArray) {
    var newArray = [];
    // Loop through all the words in the word array so
    // that you can compare to the provided key word
    for (var i = 0; i < wordArray.length; i++) {
        // Compare the current word in the array to the key word
        if (areLettersInString(keyWord, wordArray[i])) {
            // if the letters in the keyWord can spell the
            // word in the word array, add it to our new array
            newArray.push(wordArray[i]);
        }
    }
    return newArray;
};
exports.findWords = findWords;
// Loop through the letters in the current word itself.
// and compare the frequency of that letter in the
// selected word to the frequency in the key word
var areLettersInString = function (keyWord, currentWord) {
    for (var i = 0; i < currentWord.length; i++) {
        var char = currentWord[i];
        // if the letter shows up in the current word more times
        // than it does in the alpha word, this word can not
        // be spelled with the alpha word
        if (charFrequency(currentWord, char) > charFrequency(keyWord, char)) {
            // this ends the loop so you no longer have to loop through
            // every letter in this word
            return false;
        }
    }
    return true;
};
// Count the number of times a letter shows up in a word
// so that you can compare the currentWord to the alpha word
var charFrequency = function (word, char) {
    var charCount = 0;
    for (var i = 0; i < word.length; i++) {
        // if the current letters match, increase the letter count
        if (word[i] === char) {
            charCount++;
        }
    }
    return charCount;
};
console.log((0, exports.findWords)("ate", ["a", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
console.log((0, exports.findWords)("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
