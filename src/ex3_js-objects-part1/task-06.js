function deepClone(obj) {
    var newObject = {};
        for(var key in obj) {
            if(obj.hasOwnProperty(key)) { 
                if(Array.isArray(obj[key])) {
                    newObject[key] = [];
                    newObject[key].push(deepClone(obj[key][0]));
                } else if(typeof obj[key] === 'object'){
                    newObject[key] = deepClone(obj[key]);
                } else {
                    newObject[key] = obj[key];
                }
            }
        }
    
    return newObject;
}
module.exports = deepClone;