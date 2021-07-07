function filterOpeners(brace) {
  const openers = ["[", "{", "("]
  return openers.includes(brace)
}

function filterClosers(brace) {
  const closers = ["]", "}", ")"]
  return closers.includes(brace)
}

function matchingBraces(keyArray) {
  const answer = []
  
  for (let key in keyArray) {
    const openerBrace = keyArray[key].split("").filter(filterOpeners)
    const closerBrace = keyArray[key].split("").filter(filterClosers)
    const matchingBrace = []

    for (let brace in openerBrace) {
      switch (openerBrace[brace]) {
        case "[":
          matchingBrace.unshift("]");
          break;
        case "{":
          matchingBrace.unshift("}");
          break;
        case "(":
          matchingBrace.unshift(")");
          break;
        default:
          console.log("Invalid brace")
      }
    }

    if (closerBrace.join("") === matchingBrace.join("")) {
      answer.push("SIM")
    } else {
      answer.push("NÃO")
    }
  }
  
  return answer
}