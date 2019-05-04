var Calculator = (function(){
  var currentResult = 0;
  return {
    add: function (sum) {
      if (sum) {
        currentResult += sum;
      }
      return this;
    },
    subtract: function (sub) {
      if (sub) {
        currentResult -= sub;
      }
      return this;
    },
    multiply: function (mul) {
      if (mul) {
        currentResult *= mul;
      }
      return this;
    },
    divide: function (div) {
      if (div) {
        currentResult /= div;
      }
      return this;
    }, 
    getResult: function (){
      return currentResult; 
    },
    reset: function (){
      currentResult = 0;
      return this;
    },
    setState: function (state){
      if (state) {
        currentResult = state;
      }
      return this;
    },
    fetchData: function (callback){
      currentResult = 500;
      setTimeout(callback, 3000, currentResult);
      return this;
    }
  }
}());
module.exports = Calculator;