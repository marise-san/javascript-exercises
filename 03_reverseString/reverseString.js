const reverseString = (string) => {
    let reversedString = '';
    for(let i = string.length - 1; i >= 0; i--){
        reversedString += string[i];
    }
    return reversedString;
}

reverseString('hello there');
// Do not edit below this line
module.exports = reverseString;
