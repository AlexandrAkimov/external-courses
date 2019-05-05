function hasTruthForSomeElementArray(arr, callback) {
var result = 0; 
for (var i = 0; i < arr.length; i++) { 
 result = callback (arr[i], i, arr);
 if (result > 0) return true;
} 
return false;  
} 
function callSome(item, index, arr){ 
return item * index - arr.length
} 
module.exports = hasTruthForSomeElementArray;