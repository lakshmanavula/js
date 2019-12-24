class Calculator{

        constructor(num1, num2){
            this.num1 = num1;
            this.num2 = num2;

        }

        getSum(){
            return this.num1 + this.num2;
        }
        getMulResult(){
            return this.num1 * this.num2;
        }
    
}

module.exports.Calculator = Calculator
