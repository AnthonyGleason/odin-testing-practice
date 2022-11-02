let reverseString = function (string){
    let tempArray = string.split("");
    let tempString = "";
    while (tempArray.length>0){
        tempString=tempString+tempArray.pop();
    }
    return tempString;
};

module.exports= reverseString;