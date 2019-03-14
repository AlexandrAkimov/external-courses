function getMaxOfArray(numArray){
  var maxNum = numArray[0];
  for (i = 1; i < numArray.length; ++i) {
      if (numArray[i] > maxNum) maxNum = numArray[i];
  }
  return maxNum;
}
module.exports = getMaxOfArray;
