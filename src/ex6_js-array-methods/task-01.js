function isSlice(array, begin, end){
	var copyArray = [];
	var startPos = begin;
	var finishPos = end;
	if(startPos === undefined && finishPos === undefined) copyArray = array;
	for(var i = 0; i < array.length; i++){
		if (startPos < 0 && startPos !== finishPos){
			copyArray.push(array[array.length + startPos]);
			startPos++;
		} else if (finishPos === undefined && startPos < array.length){
			copyArray.push(array[startPos]);
			startPos++;
		} else if (startPos < finishPos && startPos < array.length) {
			copyArray.push(array[startPos]);
			startPos++;
		}
	}
	return copyArray;
}
module.exports = isSlice;