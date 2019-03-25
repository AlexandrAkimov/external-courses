function addTriplePoint(str, num) { 
	if(str.length > num){ 
		var resStr = str.slice(0, num - 1) + '…';
	} 
	return resStr;
} 
module.exports = addTriplePoint;