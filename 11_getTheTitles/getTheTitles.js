const getTheTitles = function(arry) {
    debugger;
    return arry.reduce(((arryOfStrings, object)=> {

        arryOfStrings.push(object.title)
        return arryOfStrings;}),[]);
};

// Do not edit below this line
module.exports = getTheTitles;
