/**
 * @param {string} s
 * @return {number}
 */

const roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

const except = {
    "IV": 4, 
    "IX": 9, 
    "XL": 40, 
    "XC": 90, 
    "CD": 400, 
    "CM": 900
}

var romanToInt = function(s) {
    answer=0
    for (let i=1; i<=s.length; i++){
        if ((s[i-1]+s[i]) in except) {
            answer += except[s[i-1]+s[i]];
            i += 1;
        } else {
            answer += roman[s[i-1]]
        }
    }
    return answer
};