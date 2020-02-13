const removeFromArray = function(array) {
   
    var i = j = 0;
    let modArray = new Array();
    var empty = 1;

    for (i; i<array.length; i++){

        var found = 0;

        if (array[i] == arguments[1] || array[i] == arguments[2] || array[i] == arguments[3] || array[i] == arguments[4]){
            found++;
        }
            
        if (found == 0){
            modArray.push(array[i]);
            empty = 0;
        }  
        
        
    }

    return modArray;

}


module.exports = removeFromArray
