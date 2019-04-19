function deleteEmptySpaceInString(str) {
	var emptySpace = ' ';
	var firstEmptySpacePos = str.indexOf(emptySpace, 0);
	var lastEmptySpacePos = str.lastIndexOf(emptySpace, str.length);
	if (firstEmptySpacePos === -1){return 'нет пробелов'}
	var secondHalfOfString = str.slice(str.length, lastEmptySpacePos) + str.slice(lastEmptySpacePos + 1);
	var fullModifiedString = str.slice(0, firstEmptySpacePos) + str.slice(firstEmptySpacePos + 1, lastEmptySpacePos) + secondHalfOfString;
	return fullModifiedString;
}
module.exports = deleteEmptySpaceInString;