function searchPropInObject(nameProp, obj) {
	for (var key in obj){
		if(!obj.hasOwnProperty(key) && key === nameProp){
			return 1;
		}
	}
	return undefined;
}
module.exports = searchPropInObject

