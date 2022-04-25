/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = "";
    let n = Number.MAX_SAFE_INTEGER;
    strs.forEach((str) => n = Math.min(str.length, n));
    if (n) {
        for (let i=0; i<n; i++){
            const firstLetter = strs[0][i];
            for (let j=1; j<strs.length; j++){
                if (strs[j][i] !== firstLetter) return answer;
            }
            answer += firstLetter;
        }
    }
    return answer;
};