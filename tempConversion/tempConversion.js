const ftoc = function(temp) {
  var converted = ((temp-32)*5)/9;
  return +converted.toFixed(1);
}

const ctof = function(temp) {
  var converted = ((temp*9/5)+32);
  return +converted.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
