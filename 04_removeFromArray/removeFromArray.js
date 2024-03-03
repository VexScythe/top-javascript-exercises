const removeFromArray = function(elements, ...theArgs) {
    let newElements = [];
    elements.forEach(element => {
        if (!theArgs.includes(element)){
            newElements.push(element);
        }
    });
    return newElements;
};

// Do not edit below this line
module.exports = removeFromArray;
