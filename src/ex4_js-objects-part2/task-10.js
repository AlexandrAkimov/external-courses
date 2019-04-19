function reverseString(str) { 
var strRev = ""; 
for (i = str.length-1; i >= 0; i--) { 
strRev += str[i]; 
} 
return strRev 
} 
module.exports = reverseString;