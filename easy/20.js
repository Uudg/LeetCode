const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}
     
const isValid = (s) => {
    if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false
    let stack = []
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === "[" || s[i] === "(" || s[i] === "{") {
            stack.push(s[i])
        } else if (pairs[stack.pop()] !== s[i]) {
            return false
        }
        
    }
    return stack.length === 0
    
};