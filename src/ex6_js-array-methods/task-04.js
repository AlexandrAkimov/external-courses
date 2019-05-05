function filtersArrayElementsToNewArray(arr, callback) {
	var result = 0;
	var newArray = [];
	for (var i = 0; i < arr.length; i++) { 
 		result = callback (arr[i], i, arr);
 		if (result > 0) newArray.push(arr[i]);
	} 
	return newArray;
} 
function callFilter(item, index, arr){ 
	return item * index - arr.length;
}
module.exports = filtersArrayElementsToNewArray;