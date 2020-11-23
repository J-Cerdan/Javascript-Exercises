const palindromes = function(str) {
    
    var outStr = str.toLowerCase().replace(/[A-Za-z]/g, "");

    return (outStr.split("").reverse().join("") == outStr);

}

module.exports = palindromes
