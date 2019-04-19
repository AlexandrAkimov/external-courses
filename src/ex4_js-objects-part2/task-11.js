function isRepeatElement(str){ 
var result = {}; 
var arr = str.split('');
arr.forEach(function (item) { 
		if(result[item] !== undefined){ 
		++result[item]; 
		} else { result[item] = 1;} 
	}); 
	for(var key in result){
		if(result.hasOwnProperty(key)){
			console.log('элемент ' + key + ': ' + result[key] + 'раз'); 
		} 
	}
} 
module.exports = isRepeatElement;