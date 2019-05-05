function hasTruthForEveryElementArray(arr, callback) {
var result = 0; 
for (var i = 0; i < arr.length; i++) { 
 result = callback (arr[i], i, arr);
 if (!result) return false;
} 
return true;  
} 
function callEvery(item, index, arr){ 
return (item * index - arr.length) > 0;
} 
module.exports = hasTruthForEveryElementArray;