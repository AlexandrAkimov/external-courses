function stringOrNumber(argType){
	if ( typeof(argType) == "string" ){
		return 'string';
	} else if ( typeof(argType) == "number" ) {
		return 'number';
	} 
	return undefined;
}
module.exports = stringOrNumber;
