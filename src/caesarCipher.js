let isCapital = function (char){
    let tempChar = char.toUpperCase();
    if (tempChar==char){
        return true;
    }else{
        return false;
    };
}

let shiftChar = function (char){
    switch(char){
        case 'a':
            return 'd';
        case 'b':
            return 'e';
        case 'c':
            return "f";
        case 'd':
            return "g";
        case 'e':
            return "h";
        case 'f':
            return "i";
        case 'g':
            return "j";
        case 'h':
            return "k";
        case 'i':
            return "l";
        case 'j':
            return "m";
        case 'k':
            return "n";
        case 'l':
            return "o";
        case 'm':
            return "p";
        case 'n':
            return "q";
        case 'o':
            return "r";
        case 'p':
            return "s";
        case 'q':
            return "t";
        case 'r':
            return "u";
        case 's':
            return "v";
        case 't':
            return "w";
        case 'u':
            return "x";
        case 'v':
            return "y";
        case 'w':
            return "z";
        case 'x':
            return "a";
        case 'y':
            return "b";
        case 'z':
            return "c";
        default:
            return char;
    };
};

let caesarCipher = function (string){
    let tempArray = string.split("");
    let tempString = "";
    while (tempArray.length>0){
        let char = tempArray.shift();
        if (isCapital(char)){
            char= shiftChar(char.toLowerCase()).toUpperCase();
        }else{
            char= shiftChar(char);
        };
        tempString=tempString+char;
    };
    return tempString;
};

module.exports= caesarCipher;