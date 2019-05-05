function transformsArrayIntoNewArray(arr, callback) {
	var result = 0;
	var newArray = [];
	for (var i = 0; i < arr.length; i++) { 
 		result = callback (arr[i], i, arr);
 		newArray.push(result);
	} 
	return newArray;
} 
function callMap(item, index, arr){ 
	return item * index - arr.length;
}
module.exports = transformsArrayIntoNewArray;