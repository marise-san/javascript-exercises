const fibonacci = function (arrPosition) {
    if (arrPosition <= 0) {
        return "OOPS";
    } else {
        let fibo = [];
        fibo[0] = 1;
        fibo[1] = 1;
        for (let i = 2; i < arrPosition; i++) {
            fibo[i] = fibo[i - 2] + fibo[i - 1];
        }
        return fibo.pop();
    }
}

// Do not edit below this line
module.exports = fibonacci;
