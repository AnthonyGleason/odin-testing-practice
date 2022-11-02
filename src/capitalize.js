let capitalize = function (string){
    let tempString = string.slice(1, string.length);
    string = string[0].toUpperCase()+tempString;
    return string;
};

module.exports = capitalize;