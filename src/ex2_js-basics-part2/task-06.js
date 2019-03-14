function simpleOrComplexUnder1000(argNumber){
	if (argNumber === 1) return 'Число 1 - не составное число и не простое число';
	if(argNumber === 0) return 'Число 0 - не натуральное число';
	if (argNumber > 1000) return 'Данные неверны';
	for(var i = 2; i < argNumber; i++){
			if (argNumber % i === 0){
				return 'Число '+ argNumber + ' - составное число'
			}
		}
	return 'Число ' + argNumber + ' - простое число';	
}
module.exports = simpleOrComplexUnder1000;