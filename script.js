class calculator {
    constructor (previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.clear()
    }

    clear(){
        this.theCurrentOperand = '';
        this.thePreviousOperand = '';
        this.operator = undefined

    }
    delete() {
        this.theCurrentOperand = this.theCurrentOperand.toString().slice(0, -1)


    }
    appendNumber(num) {
        if(num === '.' && this.theCurrentOperand.includes('.')) return;
        this.theCurrentOperand = this.theCurrentOperand.toString() + num.toString();
    }   
    selectOperators(operator) {
        if(this.theCurrentOperand === '') return
        if(this.thePreviousOperand !== ''){
            this.calculate();
        }
        this.operator = operator;
        this.thePreviousOperand = this.theCurrentOperand;
        this.theCurrentOperand = '';

    }
    calculate() { 
        let compute 
        const first = parseFloat(this.thePreviousOperand)
        const current = parseFloat(this.theCurrentOperand)
        if(isNaN(first) || isNaN(current)) return

        switch(this.operator) {
            case '+':
                compute = first + current
            break

            case '-':
                compute = first - current
            break

            case '/':
                compute = first / current
            break

            case '*':
                compute = first * current
            break
            default :
            return
        }
        this.theCurrentOperand = compute
        this.operator = undefined
       this.thePreviousOperand = ''

    }
    display() {
        this.currentOperand.innerText = this.theCurrentOperand 
        this.previousOperand.innerText = this.thePreviousOperand
    }

}

const calculatorNum = document.querySelectorAll('.calculatorNumber');
const calculatorOperator = document.querySelectorAll('.operators');
const previousOperand = document.querySelector('.first-operand');
const currentOperand = document.querySelector('.current-operand');
const clearCalculator = document.querySelector('.allClear');
const deleteCalculator = document.querySelector('.delete');
const equality = document.querySelector('.equals'); 


const kalculator = new calculator(previousOperand, currentOperand);

calculatorNum.forEach(button => {
    button.addEventListener('click', () => {
        kalculator.appendNumber(button.innerText);
        kalculator.display();
    })
})

calculatorOperator.forEach(button => {
    button.addEventListener('click', () => {
        kalculator.selectOperators(button.innerText);
        kalculator.display();
    })
})

equality.addEventListener('click', button => {
    kalculator.calculate();
    kalculator.display()
})

clearCalculator.addEventListener('click', button => {
    kalculator.clear();
    kalculator.display();
})

deleteCalculator.addEventListener('click', button => {
    kalculator.delete();
    kalculator.display();
})
