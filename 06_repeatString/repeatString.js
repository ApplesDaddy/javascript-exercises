const repeatString = function(string, num) {
    // If `num` is a negative number, return the string `'ERROR'` instead.
    if (num < 0) {
        return 'ERROR'
    }
    let res = "";
    for(let i = 0; i < num; i++){
        res += string;
    }
    return res;
    // repeatString('hey', 3) // returns 'heyheyhey'
    // This function will take two arguments, `string` and `num`.
};

// Do not edit below this line
module.exports = repeatString;
