const fibonacci = function(position) {
    if (!isNaN(position)) {
        position = parseInt(position);
        if (position >= 0) {
            const fib = [0, 1];
            for (let i = 2; i <= position; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }
            return fib[position];
        }
    }
    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
