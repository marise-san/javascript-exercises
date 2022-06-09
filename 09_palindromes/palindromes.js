const palindromes = function (string) {
    const arr = string.split('');
    const filtered = arr.filter(catchSym = (arr) => {
        return arr !== " " &&
            arr !== "," &&
            arr !== "." &&
            arr !== "!";
    });

    const str = filtered.join("").toLowerCase();
    const revStr = filtered.reverse().join("").toLowerCase();

    const palindrome = (str === revStr) ? true : false;

    return palindrome;
}

// Do not edit below this line
module.exports = palindromes;
