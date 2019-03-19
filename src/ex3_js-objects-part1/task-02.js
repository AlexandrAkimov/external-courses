function displayPropAndValue(obj) {
	for(key in obj){
		if(obj.hasOwnProperty(key)){console.log("ключ: " + key + ", значение: " + obj[key]);
		}
	}
}
module.exports = displayPropAndValue;