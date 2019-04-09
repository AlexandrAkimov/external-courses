var calculator = { 
	result: 0, 
	add: function add(valueNum) { 
		if (Number.isFinite(valueNum)) { 
		calculator.result += valueNum; 
		} 
		return add; 
	}, 
	subtract: function subtract(valueNum) { 
		if (Number.isFinite(valueNum)) { 
		calculator.result -= valueNum; 
		} 
		return subtract; 
	}, 
	divide: function divide(valueNum) { 
		if (Number.isFinite(valueNum)) { 
		calculator.result /= valueNum; 
		} 
		return divide; 
	}, 
	multiply: function multiply(valueNum) { 
		if (Number.isFinite(valueNum)) { 
		calculator.result *= valueNum; 
		} 
		return multiply; 
	}, 
	getResult: function getResult() { 
		return calculator.result 
	}, 
	reset: function reset() { 
		calculator.result = 0 
		return reset; 
	}, 
} 
module.exports = calculator;