const palindromes = function (str) {
    let lexicon = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

    let L = 0;
    let R = str.length-1
    while(L<R){
        while(!(lexicon.includes(str[L]))){
            L++;
        }
        while(!(lexicon.includes(str[R]))){
            R--;
        }
        if(str[L].toLowerCase()!=str[R].toLowerCase())return false;
        L++; R--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
