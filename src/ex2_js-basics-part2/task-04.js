function isEqualArray(baseArray){
	var compareArray = [];
	for(var i = 0; i < baseArray.length; ++i){
		if (compareArray.indexOf(baseArray[i]) !== -1) {
            return true;
        }
        compareArray.push(baseArray[i]);
	}
	return false;
}
module.exports = isEqualArray;