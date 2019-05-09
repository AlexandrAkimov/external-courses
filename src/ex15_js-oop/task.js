(function () {
  var basicCalculator = {
    add: function (sum) {
      if (sum) {
        this.result += sum;
      }
      return this;
    },
    subtract: function (sub) {
      if (sub) {
        this.result -= sub;
      }
      return this;
    },
    divide: function (div) {
      if (div) {
        this.result /= div;
      }
      return this;
    },
    multiply: function (mul) {
      if (mul) {
        this.result *= mul;
      }
        return this;
    },   
    reset: function () {
      this.result = 0;
      return this; 
    },   
    setState: function (state){
      if (state) {
        this.result = state;
      }
      return this;
    }
  };

  var trigonometricCalculator = {
    sin: function (rad) {
      if (rad) {
        this.result = Math.sin(rad);
      }
      return this;
    },
    cos: function (rad) {
      if (rad) {
        this.result = Math.cos(rad);
      }
      return this;
    }  
  };

  Object.setPrototypeOf(trigonometricCalculator, basicCalculator); 

  var bookerCalculator = {
    convertationInUSD: function (ru) {
      if (ru) {
        this.result = (ru / this.dollarRate).toFixed(2);
      }
      return this;
    }
  };

  Object.setPrototypeOf(bookerCalculator, basicCalculator);

  var programmingCalculator = {
    eval: function (code) {
      return this;
    }
  };

  Object.setPrototypeOf(programmingCalculator, basicCalculator); 

  function SimpleCalc (type, brandNameCalc) {
    this.result = 0;
    this.type = type;
    this.brandNameCalc = brandNameCalc;
  }
  function EngineerCalc (type, brandNameCalc) {
    SimpleCalc.apply(this, arguments);
  }
  function BookerCalc (type, brandNameCalc, dollarRate) {
    SimpleCalc.apply(this, arguments);
    this.dollarRate = dollarRate;
  }
  function ProgCalc (type, brandNameCalc) {
    SimpleCalc.apply(this, arguments);
  }

  SimpleCalc.prototype = basicCalculator;
  EngineerCalc.prototype = trigonometricCalculator;
  BookerCalc.prototype = bookerCalculator;
  ProgCalc.prototype = programmingCalculator;

  var basicCalc = new SimpleCalc ('pocket', 'citizen');
  basicCalc.add(100).multiply(2).divide(20).reset().subtract(1);
  console.log('Результат вычисления простого калькулятора: ' + basicCalc.result);

  var enginCalc = new EngineerCalc ('desktop', 'casio');
  enginCalc.add(100).multiply(2).divide(20).reset().subtract(1);
  console.log('Результат вычисления инженерного калькулятора простыми методами: ' + enginCalc.result);
  enginCalc.sin(1);
  console.log('Синус угла = ' + enginCalc.result);

  var bookerCalcul = new BookerCalc ('printing', 'citizen', 2000);
  bookerCalcul.add(100).multiply(2).divide(20).reset().subtract(1);
  console.log('Результат вычисления бухгалтерского калькулятора простыми методами: ' + bookerCalcul.result);
  bookerCalcul.convertationInUSD(1000);
  console.log('Конвертация рублей ' + bookerCalcul.result + '$');

  var progCalcul = new ProgCalc ('online', 'mail.ru');
  progCalcul.add(100).multiply(2).divide(20).reset().subtract(1);
  console.log('Результат вычисления калькулятора простыми методами: ' + progCalcul.result);
}())