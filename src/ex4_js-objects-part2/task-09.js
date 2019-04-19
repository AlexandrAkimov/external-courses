function placeSubstrInString(str, substr, num) { 
var arr = str.split(' '); 
arr.splice(num + 1, 0, substr); 
var resStr = arr.join(' '); 
return resStr; 
} 
module.exports = placeSubstrInString;