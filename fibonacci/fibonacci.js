const fibonacci = function(value) {

    value = parseInt(value);

    if (value < 0){
        return "OOPS";
    } else if (value == 1 || value == 2){
        return 1;
    }

    var first=1;
    var second=1;
    var equal;
    var i;

    for (i=2; i<value; i++){
        equal = first + second;
        first = second;
        second = equal;
    }

    return equal;

}

module.exports = fibonacci
