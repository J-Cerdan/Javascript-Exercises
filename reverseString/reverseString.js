const reverseString = function(word) {
    var i = 0;

    var length = word.length;

    var reversedWord = "";

    for (i;i<length;i++){
        reversedWord = reversedWord.concat(word.charAt(length-1-i));
    }

    return reversedWord;
}

module.exports = reverseString
