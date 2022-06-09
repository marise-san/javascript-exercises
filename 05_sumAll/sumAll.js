const sumAll = (ini, end) => {
    
    if (ini < 0 || typeof(end) === 'string' || Array.isArray(end)) {
        return "ERROR";
    } else {
        let total = 0;
        if (ini < end) {
            for (let i = ini; i <= end; i++) {
                total = total + i;
            }
        } else {
            for (let i = end; i <= ini; i++) {
                total = total + i;
            }
        }
        return total;
    }
}

// Do not edit below this line
module.exports = sumAll;
