let numero
let binarioFinal

function fourBit(numeroInt) {
  if(typeof(numeroInt) != typeof(1)) return "Insira um número"
  
  numero = numeroInt
  const binario = []

  if (numero < 0 || numero > Math.pow(2, 31)) return "Número invalido, inserir valor entre 0 e 2³¹"

  while (numero / 2 > 0) {
    const resto = numero % 2
    binario.push(resto)
    numero = Math.floor(numero / 2)
  }

  const int = binario[3]
  binarioFinal = binario.reverse().join("")

  if (numeroInt === 0) binarioFinal = 0
  if (numeroInt < 8) return "Este binário não possui 4º dígito"
  return int
}