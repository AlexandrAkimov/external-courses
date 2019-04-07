function haveStringInObject(stringArg, obj) {
	for(key in obj){
		if(key === stringArg) return true;
	}
	return false;
}
module.exports = haveStringInObject;