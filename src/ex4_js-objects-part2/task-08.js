function lowerCamelCaseStr(str) { 
var curPosition = 0; 
var emptySpace = ' '; 
var currentStr = ''; 
while (true){ 
var emptySpacePos = str.indexOf(emptySpace, curPosition); 
if (emptySpacePos !== -1){ 
var lastEmptySpacePos = emptySpacePos; 
} else if(str[1] === ' ') { 
var secondIndex = str[2]; 
currentStr += str.slice(lastEmptySpacePos + 2, str.length); 
var resultStr = str[0].toLowerCase() + secondIndex.toUpperCase() + currentStr.slice(1, currentStr.length)
return resultStr; 
} else { 
currentStr += str.slice(lastEmptySpacePos + 2, str.length).toLowerCase(); 
resultStr = str[0].toLowerCase() + str[1] + currentStr.slice(1, currentStr.length)
return resultStr; 
} 
var bigLetter = str[emptySpacePos + 1].toUpperCase(); 
currentStr += str.slice(curPosition +1, emptySpacePos).toLowerCase() + bigLetter; 
curPosition = emptySpacePos + 1; 
} 
}
module.exports = lowerCamelCaseStr;