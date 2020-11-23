const caesar = function(string, shift) {
    var str = string.split("");
    
    var new_str = [];

    var i;

    shift = shift % 26;

    for (i=0; i<str.length; i++){

        var code;
        var shift_code;

        //check lower case
        if (/[a-z]/.test(str[i])){

            code = str[i].charCodeAt()
            shift_code = code + shift;

            if (shift_code < 97){
                shift_code += 26;
            } else if (shift_code > 122){
                shift_code -= 26;
            }

            new_str[i] = String.fromCharCode(shift_code);
        }

        //check upper case
        else if (/[A-Z]/.test(str[i])){

            code = str[i].charCodeAt()
            shift_code = code + shift;

            if (shift_code < 65){
                shift_code += 26;
            } else if (shift_code > 90){
                shift_code -= 26;
            }

            new_str[i] = String.fromCharCode(shift_code);
        }

        else {
            new_str[i] = str[i];
        }
    }

    return new_str.join("");

}

module.exports = caesar
