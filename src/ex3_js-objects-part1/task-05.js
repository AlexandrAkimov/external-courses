function copyObject(obj){
	var newObject = {};
	for(var key in obj){
		if(obj.hasOwnProperty(key)){
			newObject[key] = obj[key];
		}	
	}
	return newObject;
}
module.exports = copyObject;