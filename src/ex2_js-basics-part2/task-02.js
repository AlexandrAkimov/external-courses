function getArrayInfo(arr){
	for ( var i = 0; i <= arr.length - 1; i++ ){
		console.log( arr[i] );
	}
	console.log( arr.length + ' общее число элементов' );
}
module.exports = getArrayInfo;