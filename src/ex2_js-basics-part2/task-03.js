function countEvenAndOdd(arr){
	var resultArray = [0,0,0];
	for (var i = 0; i <= arr.length - 1; i++){
		if(typeof arr[i] === "number"){
			if ((arr[i] % 2 === 0) && arr[i] !== 0){
				resultArray[0]++; 
			} else if (arr[i] % 2 !== 0) {
				resultArray[1]++;
			} else if(arr[i] === 0){
				resultArray[2]++;
			}
		}
	}
	return resultArray;
}
module.exports = countEvenAndOdd;