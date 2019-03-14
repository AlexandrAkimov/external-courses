function stringOrNumber(argType){
	if ( typeof argType === "string" ){
		return 'string';
	} else if ( isNaN(argType) ) {
		return undefined;
	} else if ( typeof argType === "number" ){
		return 'number';
	} 
	return undefined;
}
module.exports = stringOrNumber;
