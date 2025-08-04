/**
 * Make sure to return the recursive function.
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return checkPalindrome( s )
};

function checkPalindrome(s){
    if(s.length === 1 || s.length === 0) return true;

    if( s[0] !== s[s.length - 1] )
        return false;
    
    return checkPalindrome( s.substring(1, s.length - 1) ) ;
}

// const testVal = "A man, a plan, a canal: Panama";
const testVal = "race a car";

console.log(isPalindrome(testVal))