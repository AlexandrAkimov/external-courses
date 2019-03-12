function simpleOrComplexUnder1000(argNumber){
	if (argNumber == 1) return 'Число 1 - составное число';
	if (argNumber > 1000) return 'Данные не верны';
	for(var i = 2; i < argNumber; i++){
			if (argNumber % i == 0){
				return 'Число '+ argNumber + ' - составное число'
			}
		}
		return 'Число ' + argNumber + ' - простое число';	
}
module.exports = simpleOrComplexUnder1000;