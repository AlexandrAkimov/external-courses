function calculateValueFromArray(arr, callback, initialValue) {
	var result = 0;
	var newArray = [];
	var saveArrZeroItem = arr[0];
	var startValue = initialValue;
	var array = arr;
	for (var i = 0; i < array.length; i++) {
		if(initialValue){
 			result = callback (startValue, array[i] ,i, array);
 			startValue = result;
		} else {
			result = callback(array[0], array[i], i, array);
			array[0] = result;
		} 
	}
	if(initialValue) return result;
	return result - saveArrZeroItem;
} 
function callReduce(prev, item, index, arr){
	var previousValue = prev;
	var current = previousValue += item;
	return current;
}
module.exports = calculateValueFromArray;