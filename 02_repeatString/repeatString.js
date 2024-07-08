const repeatString = function(strToRepeat, numToRepeat) {
    let repeatedStr = "";
    if(numToRepeat< 0) return "ERROR";
    for(let i = 0; i < numToRepeat; ++i){
        repeatedStr += strToRepeat;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
