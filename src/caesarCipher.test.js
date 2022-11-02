const caesarCipher = require("./caesarCipher");

test("take a string and shift each character 3 characters to the right",()=>{
    expect(caesarCipher("hello world")).toBe("khoor zruog");
});

test("caesar cipher keeps same case",()=>{
    expect(caesarCipher("HEllO")).toBe("KHooR");
});

test("caesar cipher keeps punctuation",()=>{
    expect(caesarCipher("He$l,lo%Worl&d!")).toBe("Kh$o,or%Zruo&g!");
});
