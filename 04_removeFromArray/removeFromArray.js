function removeFromArray(){
    const args = Array.from(arguments);
    const arrFromArgs = args[0];

    for(i = 1; i < args.length; i++){
        for(j = 0; j < arrFromArgs.length; j++){
            if(arrFromArgs[j] === args[i]){
                arrFromArgs.splice(j, 1);
            }
        }
    }
    return arrFromArgs;
}

console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
