const fibonacci = function(a) {
    a = +a;
    if(a == 0) return 0;
    if(a < 0) return "OOPS";
    let arry = Array(a);
    for(let i = 0; i < arry.length;++i){
        if(i == 0 || i == 1){
            arry[i] = 1;
        }else{
            arry[i] = arry[i-1] + arry[i-2];
        }
    }
    return arry[a-1];

};

// Do not edit below this line
module.exports = fibonacci;
