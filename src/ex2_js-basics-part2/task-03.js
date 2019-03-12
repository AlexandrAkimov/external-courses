function countEvenAndOdd(arr){
	var resultArray = [0, 0, 0];
	for (var i = 0; i <= arr.length - 1; i++) {
		if ((arr[i] % 2 == 0) && arr[i] != 0){
			resultArray[0]++; 
		} else if (arr[i] % 2 != 0) {
			resultArray[1]++;
		} else {
			resultArray[2]++;
		}
	}
	return resultArray;
}
console.log(countEvenAndOdd([2, 4, 6, 3, 7, 0, 0, 0 , 11 , 10]));
module.exports = countEvenAndOdd