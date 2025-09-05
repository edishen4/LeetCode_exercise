/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let number = x.toString();
    
    let reversed = number.split("").reverse().join("");
        if(number == reversed){
            return(true);
        }else{
            return(false);
        
    }
};
