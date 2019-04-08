function addPropInObject(stringArg, obj) {
		if (obj.hasOwnProperty(stringArg)){
			return obj;
		}
		var newObj = obj;
		newObj[stringArg] = 'new';
		return newObj;
}
module.exports = addPropInObject;