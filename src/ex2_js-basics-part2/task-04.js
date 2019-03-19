function isEqualArray(array){
	var currentElement = array[0];
	for(var i = 1; i < array.length; ++i){
		if (currentElement === array[i]){
            currentElement = array[i];
        } else { 
        	return false;
        }
	}
	return true;
}
module.exports = isEqualArray;