//object calculator 
function Calculator(modelName, modelColor) {

this.model = modelName;
this.color = modelColor;

this.add = function (x,y){
    return x + y; 
}

this.subtract = function (x, y){
    return x - y
}

this.multiply = function (x, y) {
  return x * y;
}

this.divide = function (x, y) {
  return x/y;
}
}

const fancyCalculator = new Calculator('Guccie', 'Gold'); 
const result = fancyCalculator.subtract(2023, 1917);
console.log(`Its been ${result} years since the first world war`); 