function filterAscii(letter) {
  const valids = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "w", "y", "z"]

  return valids.includes(letter);
}

function newPassword(stringA, stringB) {
  if (stringA.length < 1 || stringA.length > 25000) return "Comprimento de senha inválido"
  if (stringB.length < 1 || stringB.length > 25000) return "Comprimento de senha inválido"

  let newStringA = stringA.split("").filter(filterAscii)
  let newStringB = stringB.split("").filter(filterAscii)
  const newPassword = []

  const biggestLenght = newStringA.length >= newStringB.length ? newStringA.length : newStringB.length
  let counter = 0
  
  while (counter <= biggestLenght) {
    if (newStringA[counter] !== undefined) {
      newPassword.push(newStringA[counter])
    }
    if (newStringB[counter] !== undefined) {
      newPassword.push(newStringB[counter])
    }

    counter++
  }

  return newPassword.join("")
}