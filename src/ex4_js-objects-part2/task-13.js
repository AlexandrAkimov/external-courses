function generateRandomNum() { 
var randomNum = Math.random(0, 1); 
if(randomNum > 0.99 ){ 
return 100 
} 
return randomNum * 100; 
} 
module.exports = generateRandomNum;