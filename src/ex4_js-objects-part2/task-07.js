function addTriplePoint(str, num) {
	var resStr;
	if(str.length > num){ 
		resStr = str.slice(0, num - 1) + '…';
	} 
	return resStr;
} 
module.exports = addTriplePoint;