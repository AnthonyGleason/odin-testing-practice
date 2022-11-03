let average = function (array){
    let sum=0;
    array.forEach((num)=>{
        sum=sum+num;
    });
    return (sum/array.length);
};
let min = function (array){
    let min=array[0];
    array.forEach((num)=>{
        if (num<min){min=num};
    });
    return min;
};
let max = function (array){
    let max=array[0];
    array.forEach((num)=>{
        if (num>max){max=num};
    });
    return max;
};

let analyzeArray = function (array){
    let tempObj = {
        average,
        min,
        max,
        length: array.length
    };
    tempObj.average=average(array);
    tempObj.min=min(array);
    tempObj.max=max(array);
    return tempObj;
};

module.exports= analyzeArray;