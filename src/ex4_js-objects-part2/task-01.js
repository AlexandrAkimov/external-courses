function searchPropInObject(nameProp, obj) {
	for (var key in obj){
		if(!obj.hasOwnProperty(key) && key === nameProp){
			return obj[nameProp];
		}
	}
	return undefined;
}
module.exports = searchPropInObject

