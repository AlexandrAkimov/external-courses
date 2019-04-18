function upperCaseEveryWord(str) { 
	var lowerCaseStr = str.toLowerCase();
	var arrStr = lowerCaseStr.split('');
	var resArrStr = [];
	for (var i = 0; i < arrStr.length; i++) {
		if(arrStr[i] !== ' '){
			resArrStr.push(arrStr[i]);
		} else {
			resArrStr.push(arrStr[i], arrStr[i+1].toUpperCase());
			++i;
		}
	}
	var currentString = resArrStr.join('');
	var resString = currentString[0].toUpperCase() + currentString.slice(1);
	return resString;
} 
module.exports = upperCaseEveryWord;