palindrome('racecar');
palindrome('table');


// first method to compare reversed string with a non-reversed
function palindrome(str) {
    return str === str.split('').reverse().join('');
};

function palindrome2(str) {
    const len = Math.floor(str.length / 2);
    for(let i = 0; i < len; i++) {
        if(str[i] !== str[str.length - i -1]) {
            return false;

        }
    }
    return true;
}



// split takes a string and returns array 