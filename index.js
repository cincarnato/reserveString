const reverseString = function(str){

    /* YOUR CODE HERE */
   /* let result = ""

    for(let i = str.length -1; i >=0; i--)
        result += str[i]

    return result*/

    return str.split("").reverse().join("")

}

module.exports = reverseString
