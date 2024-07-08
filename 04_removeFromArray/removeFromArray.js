const removeFromArray = function(untamperedArray, ...listOfElementsToRemove) {
    let filteredArray = untamperedArray.filter((element) => {
        for(let i = 0; i < listOfElementsToRemove.length;++i){
            if(element === listOfElementsToRemove[i]) return false;
        }
        return true;
    });
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;


