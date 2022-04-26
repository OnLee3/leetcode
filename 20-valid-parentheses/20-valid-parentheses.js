/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const open = ["(", "[", "{"]
    const close = {
        "}": "{",
        "]": "[",
        ")": "("
    }
    
    for (let i=0; i<s.length; i++){
        if (open.includes(s[i])) stack.push(s[i])
        else if (close[s[i]] === stack[stack.length-1]) {
            stack.pop()
        }
        else return false;
    }
    if (stack.length > 0) return false;
    return true;
};