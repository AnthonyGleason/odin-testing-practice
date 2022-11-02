const calculator = require("./calculator");

test("add two numbers",()=>{
    expect(calculator.add(2,4)).toBe(6);
});
test("subtract two numbers",()=>{
    expect(calculator.subtract(10,5)).toBe(5);
});
test("divide two numbers",()=>{
    expect(calculator.divide(20,4)).toBe(5);
});
test("multiply two numbers",()=>{
    expect(calculator.multiply(2,7)).toBe(14);
});