const sumAll = function(min, max) {

    var sum = 0;
    var i = min;
    var error = 0;
    
    //Error Handling
    if (min < 0 || max < 0){
        return "ERROR";
    } else if (typeof min != "number" || typeof max != "number"){
        return "ERROR";
    }
    
    //Swap if misplaced
    if (min > max){
        i=max;
        max=min;
    }

    for (i; i<=max; i++){
        sum += i;
    }

    return sum;

}

module.exports = sumAll
