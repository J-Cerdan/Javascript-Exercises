const repeatString = function(word, repeat) {

    var i = 0;
    repeatedWord = "";

    if (repeat<0){
        return "ERROR";
    }

    for (i; i<repeat; i++){
        repeatedWord = repeatedWord.concat(word);
    }

    return repeatedWord;

}

module.exports = repeatString
