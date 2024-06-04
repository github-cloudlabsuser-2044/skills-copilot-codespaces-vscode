class Calculator {
    constructor() {
      this.result = 0;
    }
  
    add(number) {
      this.result += number;
      return this;
    }
  
    subtract(number) {
      this.result -= number;
      return this;
    }
  
    multiply(number) {
      this.result *= number;
      return this;
    }
  
    divide(number) {
      if (number === 0) {
        throw new Error("Cannot divide by zero");
      }
      this.result /= number;
      return this;
    }
  
    getResult() {
      return this.result;
    }
  }
  

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('add', () => {
    calculator.add(5);
    expect(calculator.getResult()).toBe(5);
  });

  test('subtract', () => {
    calculator.add(5).subtract(2);
    expect(calculator.getResult()).toBe(3);
  });

  test('multiply', () => {
    calculator.add(5).multiply(2);
    expect(calculator.getResult()).toBe(10);
  });

  test('divide', () => {
    calculator.add(10).divide(2);
    expect(calculator.getResult()).toBe(5);
  });

  test('divide by zero', () => {
    expect(() => {
      calculator.add(10).divide(0);
    }).toThrow('Cannot divide by zero');
  });
});
// Usage
const calculator = new Calculator();
  calculator.add(5).subtract(2).multiply(3).divide(2);
  console.log(calculator.getResult()); // Outputs: 4.5