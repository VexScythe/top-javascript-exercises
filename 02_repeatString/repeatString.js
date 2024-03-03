const repeatString = function(word, nTimes) {
    let finalString = ``;
    if (nTimes >= 0){
        for (let i = 0; i < nTimes; i++){
            finalString += word;
        }
        return finalString;
    }else return `ERROR`;
    
};

// Do not edit below this line
module.exports = repeatString;
