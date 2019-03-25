function upperCaseEveryWord(str) { 
var curPosition = 0; 
var emptySpace = ' '; 
var currentStr = ''; 
while (true){ 
var emptySpacePos = str.indexOf(emptySpace, curPosition); 
if (emptySpacePos !== -1){ 
var lastEmptySpacePos = emptySpacePos; 
} else if (str[0] === ' ') {
	currentStr += str.slice(lastEmptySpacePos + 2, str.length); 
	var resultStr = str[1].toUpperCase() + currentStr.slice(1, currentStr.length) 
	return resultStr;
} else { 
	currentStr += str.slice(lastEmptySpacePos + 2, str.length); 
	resultStr = str[0].toUpperCase() + str[1] + currentStr.slice(1, currentStr.length) 
	return resultStr; 
} 
var bigLetter = str[emptySpacePos + 1].toUpperCase(); 
currentStr += str.slice(curPosition +1, emptySpacePos +1) + bigLetter; 
curPosition = emptySpacePos + 1; 
} 
} 
module.exports = upperCaseEveryWord;