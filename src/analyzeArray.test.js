const analyzeArray = require("./analyzeArray");

test("tests object for average, min, max and length properties", ()=>{
    expect(analyzeArray([2,55,100,3])).toEqual({
        average: 40,
        min: 2,
        max: 100,
        length: 4
    });
});